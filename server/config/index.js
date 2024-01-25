module.exports = {
  development: {
    user: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    host: process.env.DEV_DB_HOST,
    port: parseInt(process.env.DEV_DB_PORT, 10),
    database: process.env.DEV_DB_DATABASE,
    pool: {
      max: 100,
      idleTimeoutMillis: 30000,
    },
  },
  production: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_DATABASE,
    pool: {
      max: 100,
      idleTimeoutMillis: 30000,
    },
  },
};
