
import mysql from "mysql2/promise"
import dotenv from "dotenv";
dotenv.config();
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: process.env.DB_NAME || "school_db",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

const pool = mysql.createPool({
  host: "103.185.75.157",
  user: "imslite_local_test",
  password: 'Mc$zdCf4J%wM',
  database: "imslite_school_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
// Test connection
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log(`✅ MySQL Connected to database "${process.env.DB_NAME}" on host "${process.env.DB_HOST}"`);
    conn.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
    process.exit(1);
  }
})();

export default pool;