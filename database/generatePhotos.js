const faker = require('faker');

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const generateListingPhotos = () => {
  const photosArray = [];
  const usedPhotos = [];

  // Generate 5-15 photos per listing.
  const numberOfPhotos = getRandomInt(5, 10);

  // Add an arbitrary # of photo objects to an array.
  for (let i = 0; i < numberOfPhotos; i += 1) {
    const randomPhoto = getRandomInt(1, 1000).toString().padStart(3, '0');
    // If the randomPhoto has not been used yet, create the photo object with that index.
    if (!usedPhotos.includes(randomPhoto)) {
      const photoObj = {
        url: `https://betterphotosandhackers.s3-us-west-2.amazonaws.com/${randomPhoto}.jpg`,
        descr: faker.lorem.sentence(),
        isVerified: faker.random.boolean(),
      };
      photosArray.push(photoObj);
      usedPhotos.push(randomPhoto);
    }
  }
  return photosArray;
};

module.exports = generateListingPhotos;
