// import pool from "@/lib/db";
// import { User } from "@/types/user";
// import { ObjectId } from "mongodb";

import pool, { testDbConnection } from "@/lib/db";

// export async function createUser(data:User) {
//   const client = await clientPromise;
//   return client.db().collection<User>("users").insertOne(data);
// }

// export async function getUsers():Promise<Array<User>> {
//   const client = await clientPromise;
//   return client.db().collection<User>("users").find().toArray();
// }

// export async function getUserById(id: string): Promise<User | null> {
//   const client = await clientPromise;
//   const db = client.db();

//   const user = await db.collection<User>("users").findOne({ _id: new ObjectId(id) });

//   return user;
// }

// export async function getWeather(){

//     const POOL = await pool;
//     console.log(POOL.connect());

// }

/**
 * Creates users table with default values if it does not exist
 * @author Siavash Araghi
 */
const createInitialUserTable = async () => {
  const IS_DB_CONNECT = await testDbConnection();
  if (IS_DB_CONNECT) {

    const CREATE_TABLE_SQL = `
      CREATE TABLE IF NOT EXISTS users (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE DEFAULT 'Admin',
      email VARCHAR(50) NOT NULL UNIQUE DEFAULT 'siavash.araghi@yahoo.com',
      createTime TIMESTAMP DEFAULT NOW(),
      active BOOLEAN DEFAULT TRUE);

      INSERT INTO users (active) SELECT TRUE WHERE NOT EXISTS (SELECT 1 FROM users);
    `;
    await pool.query(CREATE_TABLE_SQL);
  }
};

createInitialUserTable();
