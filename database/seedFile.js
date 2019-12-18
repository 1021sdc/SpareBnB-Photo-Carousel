/* eslint-disable no-console */
const fs = require('fs');
const faker = require('faker');
const generateListingPhotos = require('./generatePhotos');

function fileWriteSync(filePath) {
  const fd = fs.openSync(filePath, 'w');

  for (let i = 0; i < 10000000; i += 1) {
    fs.writeSync(fd, `{listingID: ${i + 1}, listingDesc: ${faker.lorem.sentence()}, isSaved: ${faker.random.boolean()}, listingPhotos: ${JSON.stringify(generateListingPhotos())}}\n`, null, null);
  }

  fs.closeSync(fd);
}

fileWriteSync('seedingData.txt');
