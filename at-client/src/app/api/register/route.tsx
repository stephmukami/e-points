import bcrypt from 'bcrypt'
import {prisma} from '@/app/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request: NextRequest){
    const body = await request.json();
    const { user_status,first_name,last_name, email, password } = body;

    if(!first_name ||!last_name|| !email || !user_status || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            first_name,
            last_name,
            user_status,
            email,
            hashed_password
        }
    });

    return NextResponse.json(user)
}