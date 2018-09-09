Knex = require('knex');
const connection = require('../knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Position extends Model {
  static get tableName() {
    return 'positions';
  }

  static get relationMappings() {
    return {
      portfolio: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname +'/portfolios',
        join: {
          from: positions.portfolio_id, 
          to: portfolios.id,
        }
      },

      stocks: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/stocks',
        join: {
          from: positions.stock_id,
          to: stocks.id,
        }
      }
    }
  }
}

module.exports = { Position }