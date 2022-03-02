// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'cluckr',
      username: 'abe',
      password: 'BmP$S5%M'
    },
    
    migrations: {
      tableName: "migrations",
      directory: 'db/migrations'
    },
    seeds: {
      directory: "db/seeds"
    }
  }
};