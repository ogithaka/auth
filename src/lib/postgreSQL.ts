import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.PostgreSQL_User,
    host: process.env.PostgreSQL_Host,
    database: process.env.PostgreSQL_Database,
    password: process.env.PostgreSQL_Password,
    port: Number(process.env.PostgreSQL_Port),
});

export default pool;
