import { Pool } from "pg";

const USE_SSL = process.env.DATABASE_URL?.includes("localhost") ? false : true;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
ssl: USE_SSL ? { rejectUnauthorized: false } : false,
});

/**
 * Test database connection.
 * This function verifies if the application can successfully connect to the database
 * by attempting to resolve the pool promise.
 * whether the connection was established.
 * @returns boolean
 * @author Siavash Araghi
 */
export async function testDbConnection(){
  let client;
  try {
    client = await pool.connect();
    const res = await client.query('SELECT NOW()');
    const IS_CONNECT = res.rowCount && res.rowCount > 0;
    console.log(IS_CONNECT ? "✅ Database connection successful" : "❌ Database connection failed:");
    return IS_CONNECT;
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    return false;
  }
  finally{
    if(client){
      // IMPORTANT: Release the client back to the pool
      client.release();
    }
  }

}


export default pool;