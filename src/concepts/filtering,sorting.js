const db=require('../db/db')

// 1. Filtering (WHERE conditions)-
async function getUserByUsername(condition) {

// 👉 You fetch specific data based on conditions

// Example: filter by username---

async function getUserByUsername(username) {
  const query=`
  SELECT * FROM users//select rows where username is these
  WHERE username=$1;` 
  ;
try {
    const res = await db(query, [username]);
    return res.rows;
  } catch (error) {
    console.error("Error filtering users:", error);
  }
}
}



//filter by email----
async function getUserByEmail(email) {
  const query = `
    SELECT * FROM users
    WHERE email = $1;
  `;

  try {
    const res = await db(query, [email]);
    return res.rows[0];
  } catch (error) {
    console.error("Error:", error);
  }
}


// sorting---
// First you choose data
// 👉 Then you arrange it

async function getUsersSortedByDate() {
  const query = `
    SELECT * FROM users
    ORDER BY created_at DESC;
  `;

  try {
    const res = await db(query);
    return res.rows;
  } catch (error) {
    console.error("Error sorting users:", error);
  }
}
async function getUsersSortedByName() {
  const query = `
    SELECT * FROM users
    ORDER BY username ASC;
  `;

  try {
    const res = await db(query);
    return res.rows;
  } catch (error) {
    console.error("Error:", error);
  }
}
module.exports = {
  getUserByUsername,
  getUserByEmail,
  getUsersSortedByDate,
  getUsersSortedByName
};