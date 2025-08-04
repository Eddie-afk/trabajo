//const { Pool } = require("pg");
import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  connectionString:
    "postgresql://root:CQ0Au6RUO6kPMZFLcmFomnlnlgX9WVhi@dpg-d28cdi49c44c73aavn7g-a.oregon-postgres.render.com/trabajo2_db_cs1t",
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
