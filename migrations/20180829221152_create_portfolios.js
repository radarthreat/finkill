
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('portfolios', table => {
      table.increments('id').primary()
      table.integer('user_id').references('users.id')
      table.jsonb('holdings')
      table.decimal('total_value')
      table.integer('created_at')
      table.integer('updated_at')
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('portfolios')
  ])
};
