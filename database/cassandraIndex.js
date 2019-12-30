const cassandra = require('cassandra-driver');
const assert = require('assert');

const client = new cassandra.Client({
  contactPoints: ['http://localhost:9304'],
});

client.connect((err) => {
  assert.ifError(err);
});


const getPhotos = (targetID, callback) => {
  const query = 'SELECT * FROM listings WHERE listingid = ?';
  client.execute(query, [targetID], { prepare: true })
    .catch(err => callback(err))
    .then(data => callback(null, data));
  // Listing.find({ listingID: targetID }, (err, photos) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     callback(null, photos);
  //   }
  // });
};

module.exports = {
  getPhotos,
};
