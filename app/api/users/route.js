// import pool from "@/lib/db";

// export async function GET() {
//   const result = await pool.query("SELECT * FROM users");

//   return Response.json(result.rows);
// }

// app/api/users/route.js
import pool from "@/lib/db";

/**
 *
 */
export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM weather;");
    return Response.json(result.rows);
  } catch (err) {
    console.error(err);
    return new Response("Database error", { status: 500 });
  }
}
