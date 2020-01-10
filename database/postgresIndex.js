const { Pool } = require('pg');
const postgresPassword = require('../data/postgresPassword.js');

const pool = new Pool({
  host: 'ec2-35-163-196-224.us-west-2.compute.amazonaws.com',
  database: 'bnbphotos',
  user: 'patrick',
  password: postgresPassword.pass,
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.connect((err) => {
  if (err) {
    console.error('postgres connection error', err);
  } else {
    console.log('postgres connected');
  }
});

module.exports = { pool };
