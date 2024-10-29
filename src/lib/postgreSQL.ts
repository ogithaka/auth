import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const query = async ({ query, params }: queryParameters) => {
    try {
        const result = await pool.query(query, params);
        return result;
    } catch (error) {
        console.error('Database query error:', error);
        throw new Error('Database query failed');
    }
};
