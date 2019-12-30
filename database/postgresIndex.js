const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'bnbphotos',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

module.exports = { client };
