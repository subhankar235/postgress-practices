const createUsersTable = require('./concepts/basic-queries');
const db = require('./db/db');

// test basic queries
async function testBasicQueries() {
  try {
    // 1. create table
    //await createUsersTable();

    // // 2. insert data
    // await db(
    //   'INSERT INTO users (username, email) VALUES ($1, $2)',
    //   ['subhankar', 'subhankar@gmail.com']
    // );

    // // 3. fetch data
     const result = await db('SELECT * FROM users');

    console.log(result.rows);
  } catch (err) {
    console.error(err);
  }
}

async function testAllQueries(params) {
  await testBasicQueries();
  
}

testAllQueries();