import mysql from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config();
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

async function getConnection() {
    const connection = await mysql.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    });
    return connection;
}

async function testConnection() {
    try {
        const connection = await getConnection();
        console.log("Conexion correcta");
    } catch (e) {
        console.error("Error de conexion",e)
    }
}

export { getConnection,testConnection};


