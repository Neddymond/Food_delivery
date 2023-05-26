export default {
  develop: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
    },
    migrations: {
      directory: 'src/migrations',
    },
    seed: {
      directory: 'src/seeds',
    },
  },
};
