/**
 * 
 * @Environments
 * 
 */
const logger = require('../config/log')

const CONFIG = {
    DEV: {
        DATABASE_URL: 'postgres://ojxlxatzphvhvq:a289f897a712c071d68f89c489020ff94d258103884eabc1564a42fbe0f0fae4@ec2-174-129-227-80.compute-1.amazonaws.com:5432/dd9su3rp12rvm'
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
