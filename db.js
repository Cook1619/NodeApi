const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    host: "localhost",
    port: 5432,
    database: "Grocery"
})

module.exports = pool;