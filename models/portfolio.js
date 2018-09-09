Knex = require('knex');
const connection = require('../knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Portfolio extends Model {
  static get tableName() {
    return 'portfolios';
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/users',
        join: {
          from: portfolios.user_id,
          to: users.id,
        }
      },

      positions: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/positions',
        join: {
          from: portfolios.position_id,
          to: positions.id,
        }
      }
    }
  }
}

module.exports = { Portfolio };