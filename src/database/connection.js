import sql from 'mssql';
import config from '../config'

const dbSettings = {

    user: config.dbUser,
    password:config.dbPassword,
    server:config.dbServer, //informar o servidor ip ou dns
    database:config.dbDatabase, //informar o database
    options:{
        encrypt: true,
        trustServerCertificate: true,
    },
};

export async function getConnection() {
    //const pool =  await sql.connect(dbSettings)
    //const result = await pool.request().query('SELECT 1');
    //console.log(result);
    try {
        const pool =  await sql.connect(dbSettings);
        return pool;  
    } catch (error) {
        console.error(error);
    }
}

export { sql };