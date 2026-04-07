const express = require('express');
const router = express.Router();
const getPool = require('../backend/src/database/database.js');

// Criar condomínio
router.post('/', async (req, res) => {
  const { name, address } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO condominiums (name, address)
       VALUES ($1, $2) RETURNING *`,
      [name, address]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Listar condomínios
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM condominiums');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;