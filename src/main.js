const { insertUser, createUsersTable } = require("./concepts/basic-queries");
const db = require("./db/db");

// test basic queries
async function testBasicQueries() {
  try {
    // 1. create table- NO NEED cause we alredy created in pgadmin
    //await createUsersTable();

    // 2. insert data
  
await insertUser("subhankar_nath", "subhankar.nath@gmail.com");
await insertUser("rahul_das", "rahul.das@gmail.com");
await insertUser("amit_sen", "amit.sen@gmail.com");
await insertUser("rohit_bose", "rohit.bose@gmail.com");
await insertUser("arijit_pal", "arijit.pal@gmail.com");

await insertUser("ritika_singh", "ritika.singh@gmail.com");
await insertUser("manish_kumar", "manish.kumar@gmail.com");
await insertUser("deepak_yadav", "deepak.yadav@gmail.com");
await insertUser("vikas_gupta", "vikas.gupta@gmail.com");
await insertUser("nisha_patel", "nisha.patel@gmail.com");
await insertUser("pooja_mehta", "pooja.mehta@gmail.com");

    // // 3. fetch data
    const result = await db("SELECT * FROM users");

    console.log(result.rows);
  } catch (err) {
    console.error(err);
  }
}

async function testAllQueries(params) {
  await testBasicQueries();
}

testAllQueries();
