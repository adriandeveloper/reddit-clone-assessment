
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments().primary();
    t.string('full_name');
    t.string('username');
    t.text('img_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
