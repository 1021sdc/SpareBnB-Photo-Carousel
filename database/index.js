const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true, useCreateIndex: true });
// mongoose.connect('mongodb://172.17.0.3/photos', { useNewUrlParser: true, useCreateIndex: true });

// Schema
const listingSchema = mongoose.Schema({
  listingID: { type: Number, unique: true },
  listingDescr: String,
  isSaved: Boolean,
  listingPhotos: [{ url: String, descr: String, isVerified: Boolean }],
});

// Listing model
const Listing = mongoose.model('Listing', listingSchema);

// Get photos from DB.
const getPhotos = (targetID, callback) => {
  Listing.find({ listingID: targetID }, (err, photos) => {
    if (err) {
      callback(err);
    } else {
      callback(null, photos);
    }
  });
};

// Put photos from DB.
const postPhotos = (listing, callback) => {
  Listing.create(listing, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Update photos from DB.
const updatePhotos = (targetID, listing, callback) => {
  Listing.findOneAndUpdate({ listingID: targetID }, listing, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Put photos from DB.
const deletePhotos = (listing, callback) => {
  Listing.deleteOne(listing, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports = {
  Listing,
  getPhotos,
  postPhotos,
  updatePhotos,
  deletePhotos,
};
