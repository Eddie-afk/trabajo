//const { Pool } = require("pg");
import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  connectionString:
    "postgresql://root:2B7gUPyfc6zRSE2qQi17rhzPBhBZ0Yuf@dpg-d1jkqh24d50c73852jlg-a.oregon-postgres.render.com/trabajo1_db_cs1t_jcas",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;

/*
async function testConection() {
  try {
    const client = await pool.connect();
    console.log("Conexion exitosa");
    client.release();
    await pool.end();
  } catch (err) {
    console.err("Error al conectar", err);
  }
}

testConection();*/
