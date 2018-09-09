Knex = require('knex');
const connection = require('../knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Transaction extends Model {
  static get tableName() {
    return 'transactions';
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/users',
        join: {
          to: users.id,
          from: transactions.user_id,
        }
      },

      stocks: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/stocks',
        join: {
          from: transactions.stock_id,
          to: stocks.id
        }
      }
    } 
  }
}

module.exports = { Transaction };