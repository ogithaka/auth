import { query } from '@/lib/postgreSQL';

export const registerUser = async ({
    email,
    hashedPassword,
}: registerUserParameters) => {
    try {
        const result = await query({
            query: `INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING id, email, created_at`,
            params: [email, hashedPassword],
        });
        return result.rows[0];
    } catch (error) {
        console.log('Error');
    }
};
