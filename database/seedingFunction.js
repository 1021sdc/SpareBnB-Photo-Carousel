/* eslint-disable no-console */
// const mongoose = require('mongoose');
// const generateListings = require('./generateListings');
// const { Listing } = require('./index');

// // Drop collection if exist.
// Listing.collection.drop(() => {});

// // Create the array of 100 listings.
// const listingsArray = generateListings();

// // Seed MongoDB.
// Listing.insertMany(listingsArray, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     console.log('Successfully seeded database!');
//   }
// });

const { Client } = require('pg');

const client = new Client();
client.connect();
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Hello World!
  client.end();
});
