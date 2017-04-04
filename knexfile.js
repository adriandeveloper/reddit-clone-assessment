// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost/reddit-clone-assessment',
    debug: true,
   },


  staging: {
    client: 'postgresql',
    connection: {
      database: 'reddit-clone-assessment',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'reddit-clone-assessment',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
