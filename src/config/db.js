const { Client } = require('pg');
const env = require('../config/env');

console.log('env', env.DATABASE_URL);

const connectionString = env.DATABASE_URL
const client = new Client({
    connectionString : "postgres://ojxlxatzphvhvq:a289f897a712c071d68f89c489020ff94d258103884eabc1564a42fbe0f0fae4@ec2-174-129-227-80.compute-1.amazonaws.com:5432/dd9su3rp12rvm",
});

client.connect().then(r => {
    client.query('CREATE TABLE IF NOT EXISTS payments ( payment_id serial PRIMARY KEY, payer_id INT NOT NULL,payer_name VARCHAR(45) NOT NULL,payee_id INT NOT NULL,payee_name VARCHAR(45) NOT NULL,amount FLOAT NOT NULL,date TIMESTAMP NOT NULL)');
    // client.query('DROP TABLE payments');
    console.log('connection successfull');
}).catch(err => {
    console.log('err', err);
    process.exit(1);
});

global.db = client;
