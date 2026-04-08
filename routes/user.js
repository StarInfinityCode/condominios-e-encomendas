const express = require('express');
const router = express.Router();
const getPool = require('../backend/src/database/database.js');
const bcrypt = require('bcrypt');

// Criar usuário
router.post('/', async (req, res) => {
  const { name, email, phone, password, role, apartment, condominium_id } = req.body;

  try {
    const pool = getPool();

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes" });
    }

    // criptografar senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, email, phone, password, role, apartment, condominium_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, email, phone, hashedPassword, role, apartment, condominium_id]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error("Erro ao cadastrar:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;