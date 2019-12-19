/* eslint-disable no-console */
const fs = require('fs');
const faker = require('faker');
const generateListingPhotos = require('./generatePhotos');

function fileWriteSync(filePath) {
  const fd = fs.openSync(filePath, 'w');

  // fs.writeSync(fd, 'listingID+listingDesc+isSaved+listingPhotos\n', null, null);

  for (let i = 0; i < 10000000; i += 1) {
    fs.writeSync(fd, `${i + 1}+${faker.lorem.sentence()}+${faker.random.boolean()}+${JSON.stringify(generateListingPhotos())}\n`, null, null);
  }

  fs.closeSync(fd);
}

fileWriteSync('seedingData.csv');
