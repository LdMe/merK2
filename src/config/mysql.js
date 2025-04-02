import mysql from 'mysql2/promise';

async function getConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '1234',
        database: 'merk2'
    });
    return connection;
}

async function testConnection() {
    try {
        const connection = await getConnection();
        console.log("Conexión correcta");
    } catch (e) {
        console.error("Error de conexion",e)
    }
}

export { getConnection,testConnection};


