module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bnbphotos',
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'pg',
    connection: 'postgres://localhost/bnbphotos',
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    connection: 'postgres://localhost/bnbphotos',
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};
