import { prisma } from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { email } = await request.json();


    if (!email) {
        throw new Error ("email required ");
    }

    try {
        const user = await prisma.user.findUnique({where:{email}});
        if (!user){
          console.error('user not found',email);
          return NextResponse.json({error:'User not found'},{status:404});
        }

        const updatedUser = await prisma.airtime_points.upsert({
            where: { user_id: user.user_id },
            update: {
              points: { increment: 10 }, 
            },
            create: {
              user_id: user.user_id,
              points: 10,
             
            },
          });
    
      return NextResponse.json(updatedUser)


    } 
    catch {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
}

