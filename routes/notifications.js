// depois de criar pacote
await pool.query(
    `INSERT INTO notifications (user_id, message)
     VALUES ($1, $2)`,
    [resident_id, 'Você recebeu um pacote']
  );