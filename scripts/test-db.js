const path = require("path");
const getPool = require(path.join(__dirname, "../backend/src/database/database.js"));

(async () => {
  const pool = getPool();
  if (!pool) {
    console.error(
      "Configure o banco: copie .env.example para .env e defina PGPASSWORD ou DATABASE_URL com senha."
    );
    process.exitCode = 1;
    return;
  }
  try {
    const res = await pool.query("SELECT NOW() AS agora");
    console.log("Conexão OK:", res.rows[0]);
  } catch (err) {
    console.error("Erro ao conectar ao PostgreSQL:", err.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
})();
