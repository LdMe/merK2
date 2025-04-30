import { getConnection } from "../config/mysql.js";

const TABLE = "stand";
async function getAll(){
    const query = `SELECT * FROM ${TABLE}`;
    const connection = await getConnection();
    const [results,_] = await connection.query(query);
    console.table(results);
    connection.end();
    return results;
}
async function getByID(id){
    const query = `SELECT * FROM ${TABLE} WHERE stand_id=?`;
    const connection = await getConnection();
    const [results,_] = await connection.query(query,[id]);
    //console.table(results);
    const result = results.length > 0 ? results[0]: null;
    connection.end();
    return result;
}

async function create(name,size,creation_date,category_id){
    const query = `INSERT INTO ${TABLE} (name,size,creation_date,stand_category_id) VALUES (?,?,?,?)`
    const connection = await getConnection();
    const results = await connection.query(query,[name,size,creation_date,category_id]);
    console.log(results);
    connection.end();
    return results;
}

async function remove(id){
    const query = `DELETE FROM ${TABLE} WHERE stand_id=?`;
    const connection = await getConnection();
    const [results,_] = await connection.query(query,[id]);
    console.table(results);
    connection.end();
    return results;
}

async function update(id,name,size,creation_date,category_id){
    const query = `UPDATE ${TABLE} SET name=?, size=?, creation_date=?, stand_category_id=? WHERE stand_id=?`
    const connection = await getConnection();
    const results = await connection.query(query,[name,size,creation_date,category_id,id]);
    console.log(results);
    connection.end();
    return results;
}

async function pruebas(){
    await update(7,"no stand aqui","medium","2025/03/05",1)
    await getAll();
}


export default {
    getAll,
    getByID,
    create,
    update,
    remove
}