import mysql from 'mysql2/promise'

export default async function conectar() {

    if (global.poolConexoes) {
        return global.poolConexoes.getConnection();
    } else {
        const pool = await mysql.createPool({
            host: '132.226.245.178',
            port: 3306,
            user: '10442211252',
            password: '10442211252',
            database: 'PFS2_10442211252',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10,
            idleTimeout: 60000,
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0
        })


        global.poolConexoes = pool;
        return await pool.getConnection();

    }
}