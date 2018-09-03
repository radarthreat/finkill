
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('stocks', table => {
      table.increments('id').primary()
      table.string('symbol')
      table.decimal('price', 8, 2)
      table.integer('volume')
      table.jsonb('price_history')
      table.jsonb('pattern')
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('stocks')
  ])
};
