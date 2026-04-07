const express = require('express');
const router = express.Router();
const getPool = require('../backend/src/database/database.js');

// Criar usuário
router.post('/', async (req, res) => {
  const { name, email, phone, role, apartment, condominium_id } = req.body;

  try {
    const pool = getPool(); // 👈 faltava isso

    const result = await pool.query(
      `INSERT INTO users (name, email, phone, role, apartment, condominium_id)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, email, phone, role, apartment, condominium_id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Listar usuários
router.get('/', async (req, res) => {
  try {
    const pool = getPool();

    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);

  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;