import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};
