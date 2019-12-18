exports.seed = (knex) => {
  return knex('bnbphotos').del()
    .then(() => knex('bnbphotos').insert([
      { id: 1, task: 'Create API' },
      { id: 2, task: 'Watch Money Heist' },
      { id: 3, task: 'Do Dishex' },
    ]));
};
