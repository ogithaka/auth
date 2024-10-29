import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/registerUser';

export async function POST(req: NextRequest) {
    const { email, hashedPassword } = await req.json();

    const user = await registerUser({
        email: email,
        hashedPassword: hashedPassword,
    });

    if (user) {
        return NextResponse.json({
            success: true,
            redirect: '/dashboard',
            user,
        });
    } else {
        return NextResponse.json(
            { success: false, message: 'Registration Failure' },
            { status: 401 }
        );
    }
}
