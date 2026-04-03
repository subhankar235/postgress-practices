const db = require("../db/db");


//createtable---
async function createUsersTable() {
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db(createUsersTableQuery);
    console.log("Users table created successfully");
  } catch (error) {
    console.error("Error creating table:", err);
  }
}

//insert---
//it declare the function 
async function insertUser(username, email) {
  const insertUserQuery = `
    INSERT INTO users (username, email)
    VALUES ($1, $2)
    RETURNING *;
  `
  try {
    //it run the declare function
    const res = await db(insertUserQuery, [username, email]);
    console.log('user inserted succesfully', res.rows[0]);   // return inserted user
  } catch (error) {


    console.error("Error inserting user:", err);
  }
} 


//fetch--
module.exports = {createUsersTable,insertUser}