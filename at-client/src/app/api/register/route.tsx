import bcrypt from 'bcrypt'
import {prisma} from '@/app/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request: NextRequest){
    const body = await request.json();
    const { user_status,first_name,last_name, email, password,phone_number } = body;

    if(!first_name ||!last_name|| !email || !user_status || !password || !phone_number) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const userEmail = await prisma.user.findUnique({
        where: {
            email
        }
    });

    const userPhoneNumber = await prisma.user.findUnique({
        where: {
            phone_number
        }
    });

    if(userEmail || userPhoneNumber) {
        throw new Error('User already exists')
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            first_name,
            last_name,
            email,
            phone_number,
            hashed_password,
            user_status
        }
    });

    return NextResponse.json(user)
}