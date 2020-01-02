const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'bnbphotos',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.connect((err) => {
  if (err) {
    console.error('postgres connection error', err.stack);
  } else {
    console.log('postgres connected');
  }
});

module.exports = { pool };
