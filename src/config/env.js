/**
 * 
 * @Environments
 * 
 */
const logger = require('../config/log')

const CONFIG = {
    DEV: {
        DATABASE_URL: 'postgres://postgres:postgres@10.202.70.111:5432/postgres'
        , SERVER_PORT: 4001
    },
    PRODUCTION: {
        SERVER_PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL
    }
}

function getConfiguration() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
        logger.info('##### DEV ENVIRONMENT #####');
        return CONFIG.DEV;
    } else if (process.env.NODE_ENV == 'production') {
        logger.info('##### PRODUCTION ENVIRONMENT #####');
        return CONFIG.PRODUCTION;
    }
}

module.exports = getConfiguration();