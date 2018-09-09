
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('positions', table => {
      table.increments('id').primary()
      table.integer('stock_id').references('stocks.id')
      table.integer('portfolio_id').references('portfolios.id')
      table.boolean('open')
      table.decimal('shares')
      table.decimal('value')
      table.decimal('return')
      table.string('type')
      table.integer('updated_at')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('positions')
  ])
};
