const path = require("path");
const express = require("express");
const getPool = require(
  path.join(__dirname, "backend/src/database/database.js"),
);
const bcrypt = require("bcrypt");
const app = express();

// servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static("frontend"));

app.use(express.json()); // 👈 necessário para receber JSON

// importar rotas
const usersRoutes = require("./routes/user");
const packagesRoutes = require("./routes/packages");
const condominiumsRoutes = require("./routes/condominiums");

// usar rotas
app.use("/api/users", usersRoutes);
app.use("/api/packages", packagesRoutes);
app.use("/api/condominiums", condominiumsRoutes);

// rota básica
app.get("/api", (req, res) => {
  res.json({ mensagem: "API funcionando 🚀" });
});

// verifica se o PostgreSQL responde (usa o mesmo pool do app)
app.get("/api/health/db", async (req, res) => {
  const pool = getPool();
  if (!pool) {
    return res.status(503).json({
      ok: false,
      error:
        "Banco não configurado. Copie .env.example para .env e defina PGPASSWORD ou DATABASE_URL.",
    });
  }
  try {
    const { rows } = await pool.query("SELECT NOW() AS server_time");
    res.json({ ok: true, server_time: rows[0].server_time });
  } catch (err) {
    res.status(503).json({ ok: false, error: err.message });
  }
});

// iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.post("/api/login", async (req, res) => {
  const pool = getPool();

  // 👇 ADICIONA ISSO AQUI
  if (!pool) {
    return res.status(500).json({
      error: "Banco de dados não conectado",
    });
  }

  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    if (!user.password) {
      return res.status(500).json({
        error: "Usuário sem senha cadastrada",
      });
    }

    const senhaValida = await bcrypt.compare(password, user.password);

    if (!senhaValida) {
      return res.status(400).json({ error: "Senha incorreta" });
    }

    res.json({
      message: "Login OK",
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("ERRO NO LOGIN:", err);

    res.status(500).json({
      error: "Erro no servidor",
      detalhe: err.message,
    });
  }
});

app.post("/api/users", async (req, res) => {
  const pool = getPool();

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes." });
    }

    // verificar duplicidade
    const check = await pool.query(
      "SELECT id FROM users WHERE username = $1 OR email = $2 LIMIT 1",
      [username, email],
    );

    if (check.rows.length > 0) {
      return res.status(409).json({
        error: "Username ou email já cadastrado.",
      });
    }

    // criptografar senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // inserir no banco
    const result = await pool.query(
      `INSERT INTO users (name, email, password, role)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [name, email, hashedPassword, "morador"], // 👈 aqui está a correção
    );

    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      userId: result.rows[0].id,
    });
  } catch (err) {
    console.error("Erro no /api/users:", err);
    res.status(500).json({
      error: "Erro interno ao cadastrar usuário.",
    });
  }
});
