/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postgres = require('../database/postgresIndex.js');


const app = express();

const PORT = 3001;

app.use(express.static('public/dist/'));
app.use(cors());
app.use(bodyParser.json());

// PostgresQL
app.get('/photos/:listingID', (req, res) => {
  const targetID = req.params.listingID;
  postgres.pool
    .query('SELECT * FROM listings WHERE listingid = $1', [targetID])
    .then((data) => {
      res.status(200).send(data.rows[0]);
    })
    .catch(err => res.status(404).send(err));
});

app.post('/photos', (req, res) => {
  const {
    listingid, issaved, listingdescr, listingphotos,
  } = req.body;
  postgres.pool
    .query('INSERT INTO listings (listingid, issaved, listingdescr, listingphotos) VALUES ($1, $2, $3, $4)', [listingid, issaved, listingdescr, listingphotos])
    .then(res.status(201).send())
    .catch(err => res.status(404).send(err));
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
