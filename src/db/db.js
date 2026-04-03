const { Pool } = require('pg');
require("dotenv").config();

// create pool (connection manager)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgress-basics',
  password: 'postgress1234#',
  port: 5432,
});


// function to run queries
async function query(text, params) {
  const start = Date.now();

  try {
    const result = await pool.query(text, params);

    const duration = Date.now() - start;

    console.log('Executed query:', {
      text,
      duration,
      rows: result.rowCount,
    });

    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = query;