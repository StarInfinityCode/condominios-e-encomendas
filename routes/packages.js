const express = require('express');
const router = express.Router();
const getPool = require('../backend/src/database/database.js');

// Criar pacote
router.post('/', async (req, res) => {
  const { description, resident_id, received_by } = req.body;

  try {
    const pool = getPool();

    const result = await pool.query(
      `INSERT INTO packages (description, resident_id, received_by)
       VALUES ($1, $2, $3) RETURNING *`,
      [description, resident_id, received_by]
    );

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Marcar como retirado
router.put('/:id/pickup', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `UPDATE packages
       SET status = 'picked_up', picked_up_at = CURRENT_TIMESTAMP
       WHERE id = $1 RETURNING *`,
      [id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;