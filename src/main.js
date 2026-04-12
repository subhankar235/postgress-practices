// const { createUsersTable,
//   insertUser,
//   getAllUsers,
//   getUserById,
//   updateUser,
//   deleteUser } = require("./concepts/basic-queries");
// const db = require("./db/db");

// // test basic queries
// async function testBasicQueries() {
//   try {
//     // 1. create table- NO NEED cause we alredy created in pgadmin
//     //await createUsersTable();

//     // 2. insert data

// await insertUser("subhankar_nath", "subhankar.nath@gmail.com");
// await insertUser("rahul_das", "rahul.das@gmail.com");
// await insertUser("amit_sen", "amit.sen@gmail.com");
// await insertUser("rohit_bose", "rohit.bose@gmail.com");
// await insertUser("arijit_pal", "arijit.pal@gmail.com");

// await insertUser("ritika_singh", "ritika.singh@gmail.com");
// await insertUser("manish_kumar", "manish.kumar@gmail.com");
// await insertUser("deepak_yadav", "deepak.yadav@gmail.com");
// await insertUser("vikas_gupta", "vikas.gupta@gmail.com");
// await insertUser("nisha_patel", "nisha.patel@gmail.com");
// await insertUser("pooja_mehta", "pooja.mehta@gmail.com");

//     // 3. fetch data
//     const result = await db("SELECT * FROM users");

//     console.log(result.rows);
//   } catch (err) {
//     console.error(err);
//   }
// }
// async function testFilterAndSortQueries(){
//   try{

//   }
//   catch(e){

//   }
// }
// async function testAllQueries(params) {
//   //await testBasicQueries();
// }

// testAllQueries();





const {
  createUsersTable,
  insertUser,
  getallUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./concepts/basic-queries");

const {
  getUserByUsername,
  getUserByEmail,
  getUsersSortedByDate,
  getUsersSortedByName,
} = require("./concepts/filtering,sorting");
const db = require("./db/db");
async function main() {
  try {
    // await createUsersTable();
    // 🔥 clear old data first

       await db("TRUNCATE TABLE users RESTART IDENTITY;");


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

    const allUsers = await getallUsers();
    console.log("All Users:", allUsers);

    const userById = await getUserById(1);
    console.log("User By ID:", userById);

    const filteredUser = await getUserByUsername("rahul_das");
    console.log("Filtered By Username:", filteredUser);

    const userByEmail = await getUserByEmail("rahul.das@gmail.com");
    console.log("Filtered By Email:", userByEmail);

    const sortedByDate = await getUsersSortedByDate();
    console.log("Sorted By Date DESC:", sortedByDate);

    const sortedByName = await getUsersSortedByName();
    console.log("Sorted By Name ASC:", sortedByName);

    const updatedUser = await updateUser(
      1,
      "updated_name",
      "updated@gmail.com",
    );
    console.log("Updated User:", updatedUser);

    const deletedUser = await deleteUser(2);
    console.log("Deleted User:", deletedUser);

    const finalUsers = await getallUsers();
    console.log("Final Users:", finalUsers);
  } catch (error) {
    console.error(error);
  }
}

main();
