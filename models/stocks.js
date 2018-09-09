Knex = require('knex');
const connection = require('../knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Stock extends Model {
  static get tableName() {
    return 'stocks';
  }

  static get relationMappings() {
    return {
      transactions: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/transactions',
        join: {
          from: stocks.id,
          to: transactions.stock_id,
        }
      }
    }
  }
}

module.exports = { Stock };