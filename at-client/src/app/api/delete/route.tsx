import {prisma} from '@/app/lib/prisma'

import {  NextResponse } from 'next/server'

export async function DELETE(request: Request){

    try{
        const {user_email} = await request.json();
        if (!user_email){
            return NextResponse.json({error: 'no user found'}, {status: 400});
        }

        await prisma.user.delete ({
            where:{
                email: user_email,
            },
        }) ;
        return NextResponse.json({message: 'User account succesfully deleted'},{status:200});
    }

    catch (error){
        console.error('Error deleteing user account: ', error);
        return NextResponse.json({error: 'Failed to delete user account'},{status:500});
    }
}