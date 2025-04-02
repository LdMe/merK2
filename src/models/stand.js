import { getConnection } from "../config/mysql.js";

const TABLE = "stand";


async function getAll() {
    const query = `SELECT * FROM ${TABLE}`;
    const connection = await getConnection();
    const [results, _] = await connection.query(query);
    console.table(results);
    connection.end();
    return results;
}

async function getByID(id) {
    const query = `SELECT * FROM ${TABLE} WHERE stand_id=?`;
    const connection = await getConnection();
    const [results, _] = await connection.query(query,[id]);
    //console.table(results);
    const result = results.length > 0 ? results[0] : null;
    connection.end();
    return result;
}

async function remove(id) {
    const query = `DELETE FROM ${TABLE} WHERE stand_id=?`;
    const connection = await getConnection();
    const [results, _] = await connection.query(query,[id]);
    console.table(results);
    connection.end();
    return results;
}

async function create(name,size,creationDate,categoryId) {
    const query = `INSERT INTO ${TABLE} (name,size,creation_date,stand_category_id) VALUES(?,?,?,?)`;
    const connection = await getConnection();
    const [results, _] = await connection.query(query,[name,size,creationDate,categoryId]);
    console.table(results);
    connection.end();
    return results;
}

async function update(id,name,size,creationDate,categoryId) {
    const query = `UPDATE ${TABLE} SET name=?,size=?,creation_date=?,stand_category_id=? WHERE stand_id=?`;
    const connection = await getConnection();
    const [results, _] = await connection.query(query,[name,size,creationDate,categoryId,id]);
    console.table(results);
    connection.end();
    return results;
}

export default {
    getAll,
    getByID,
    remove,
    create,
    update
}