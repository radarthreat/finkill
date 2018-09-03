
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('transactions', table => {
      table.increments('id').primary()
      table.integer('stock_id').references('stocks.id')
      table.integer('user_id').references('users.id')
      table.decimal('quantity', 8, 2)
      table.decimal('price')
      table.integer('timestamp')
      table.string('type')
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('transactions')
  ])
};
