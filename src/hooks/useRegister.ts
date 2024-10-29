import { useState } from 'react';
import { registerUser } from '@/lib/registerUser';
import { hashPassword } from '@/lib/hash';

export const useRegister = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const register = async ({ email, password }: registerParameters) => {
        setLoading(true);
        setError(null);

        try {
            const hashedPassword = await hashPassword(password);
            const user = await registerUser({
                email: email,
                hashedPassword: hashedPassword,
            });
            return user;
        } catch (error) {
            const errorMessage = (error as Error).message;
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { register, error, loading };
};
