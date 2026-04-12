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
  `;
  try {
    //it run the declare function
    const res = await db(insertUserQuery, [username, email]);
    console.log("user inserted succesfully", res.rows[0]); // return inserted user
  } catch (error) {
    console.error("Error inserting user:", err);
  }
}

//fetch--
async function getallUsers() {
const query = `SELECT * FROM users ORDER BY id;`;
  try {
    const res = await db(query);
    return res.rows;
  } catch (error) {
    console.error("error fetching users", error);
  }
}

//fetch only one user by id--
async function getUserById(id) {
  const query = `SELECT * FROM users WHERE id=$1;`;
  try {
const res = await db(query, [id]);
    return res.rows;
  } catch (error) {
    console.error("error fetching user:", error);
  }
}

//update user--
async function updateUser(id, username, email) {
  const query = `
    UPDATE users
    SET username = $1, email = $2
    WHERE id = $3
    RETURNING *;
  `;

  try {
    const res = await db(query, [username, email, id]);
    console.log("User updated:", res.rows[0]);
    return res.rows[0];
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

//delete--
async function deleteUser(id) {
  const query = `
    DELETE FROM users
    WHERE id = $1
    RETURNING *;
  `;

  try {
    const res = await db(query, [id]);
    console.log("User deleted:", res.rows[0]);
    return res.rows[0];
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}
module.exports = {
  createUsersTable,
  insertUser,
  getallUsers,
  getUserById,
  updateUser,
  deleteUser,
};
