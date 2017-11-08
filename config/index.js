require('dotenv').config();

/**
 * @factory config
 * @description base app's configuration
 * @returns {{
 *    mongo: {
 *      uri: string
 *      collectionPrefix: string
 *      },
 *    rabbit: {
 *      url: (*)
 *      },
 *    node: {
 *      ipcName: string,
 *      ipcPath: string
 *      }
 *    }}
 */

module.exports = {
  type: 'BTC',
  rest: 'http://localhost:8082',
  db: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'data',
    login: 'root',
    pass: '123'
  },
  rabbit: {
    url: process.env.RABBIT_URI || 'amqp://localhost:5672',
    serviceName: process.env.RABBIT_SERVICE_NAME || 'app_bitcoin',
    icoServiceName: process.env.RABBIT_ICO_SERVICE_NAME || 'ico-promo'
  }
};
