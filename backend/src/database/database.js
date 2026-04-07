const path = require("path");
const { parse } = require("pg-connection-string");
const { Pool } = require("pg");

require("dotenv").config({
  path: path.join(__dirname, "../../../.env"),
});

let pool;

function isDbConfigured() {
  if (process.env.DATABASE_URL) {
    const cfg = parse(process.env.DATABASE_URL);
    return cfg.password != null && String(cfg.password) !== "";
  }
  return (
    process.env.PGPASSWORD != null && String(process.env.PGPASSWORD) !== ""
  );
}

/**
 * O driver `pg` ignora `password: ""` e usa `null`, o que quebra SCRAM.
 * Só cria o pool quando há senha em DATABASE_URL ou em PGPASSWORD.
 */
function buildPoolConfig() {
  if (process.env.DATABASE_URL) {
    const cfg = parse(process.env.DATABASE_URL);
    const password =
      cfg.password != null && String(cfg.password) !== ""
        ? String(cfg.password)
        : null;

    if (!password) {
      throw new Error(
        "DATABASE_URL precisa incluir a senha (postgresql://usuario:SENHA@host:5432/banco) ou use PGPASSWORD no .env."
      );
    }

    return {
      ...cfg,
      password,
    };
  }

  const pwd = process.env.PGPASSWORD;
  if (pwd === undefined || pwd === null || String(pwd) === "") {
    throw new Error(
      "Defina PGPASSWORD no .env ou configure DATABASE_URL com senha."
    );
  }

  return {
    host: process.env.PGHOST || "localhost",
    port: Number(process.env.PGPORT) || 5432,
    database: process.env.PGDATABASE || "postgres",
    user: process.env.PGUSER || "postgres",
    password: String(pwd),
  };
}

/** Retorna o pool singleton ou `null` se não houver credenciais no .env */
function getPool() {
  if (!isDbConfigured()) return null;
  if (!pool) pool = new Pool(buildPoolConfig());
  return pool;
}

module.exports = getPool;
module.exports.isDbConfigured = isDbConfigured;