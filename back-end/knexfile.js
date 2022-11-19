/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://utubwfoz:gwE4WzfGTZpT66iNmQ_tGrsboLfzGOC7@heffalump.db.elephantsql.com/utubwfoz",
  DATABASE_URL_DEVELOPMENT = "postgres://unscelgm:QxwJAIdgbco6jsfgC8A3FO0M6pLogC4n@heffalump.db.elephantsql.com/unscelgm",
  DATABASE_URL_TEST = "postgres://mmidlelj:x89xZ3hqaqbL5Mz1KKSDESpiZZ2IYCA3@heffalump.db.elephantsql.com/mmidlelj",
  DATABASE_URL_PREVIEW = "postgres://esqxikhk:K1ocCiHt1X8RqjOgeFTbX-IoTpndFkr_@heffalump.db.elephantsql.com/esqxikhk",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
