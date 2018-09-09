Knex = require('knex');
const connection = require('../knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      portfolios: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/portfolios',
        join: {
          from: users.id,
          to: portfolios.user_id,
        }
      },

      transactions: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/transactions',
        join: {
          from: users.id,
          to: transactions.user_id,
        }
      }
    }
  }
}

module.exports = { User };