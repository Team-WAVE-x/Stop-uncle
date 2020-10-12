const mariadb = require('mariadb');
const config = require('./config.js'); 

const pool = mariadb.createPool({ 
    host: config.host, 
    port: config.port, 
    user: config.user, 
    password: config.password, 
    connectionLimit: 5 
}); 

async function getTokenInfo(token){
    let conn, rows
    try{
        conn = await pool.getConnection()
        conn.query('USE stop_uncle')
        rows = await conn.query(`SELECT * FROM token WHERE token="${token}"`);
    }
    catch(err){
        throw err
    }
    finally{
        if (conn) conn.end()
        return rows[0]
    }
}

async function updateTokenInfo(token, call){
    let conn
    try{
        conn = await pool.getConnection()
        conn.query('USE stop_uncle')
    conn.query(`UPDATE token SET call_count = "${call}" WHERE token = "${token}"`)
    }
    catch(err){
        throw err
    }
    finally{
        if (conn) conn.end()
        return
    }
}

async function resetLimit(token){
    let conn
    try{
        if(token === "all" || token === "ALL"){
            conn = await pool.getConnection()
            conn.query('USE Stop_uncle')
            conn.query(`UPDATE token SET call_count=0`)
        }else{
            conn = await pool.getConnection()
            conn.query('USE stop_uncle')
            conn.query(`UPDATE token SET call_count=0 WHERE token = "${token}"`)
        }
    }
    catch(err){
        throw err
    }
    finally{
        if (conn) conn.end()
        return
    }
}

async function insertNewToken(token){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE stop_uncle');
        var sql = `INSERT INTO token (token, call_count, is_banned) VALUES("${token}", 0, 0)`
        conn.query(sql, function(err, rows, fields){
            if(err) console.log(err);
        });
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn) conn.end();
        return;
    }
}

module.exports = {
    getTokenInfo: getTokenInfo,
    updateTokenInfo: updateTokenInfo,
    resetLimit: resetLimit,
    insertNewToken: insertNewToken
}

