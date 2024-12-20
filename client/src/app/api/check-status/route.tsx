import { prisma } from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { email } = await request.json();


    if (!email) {
        throw new Error ("enter valid email");
    }

    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          user_status: true,
        },
      });
      return NextResponse.json(user)


    } 
    catch {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
}

// //alternative error handling
// import { prisma } from '@/app/lib/prisma';
// import { NextRequest, NextResponse } from 'next/server';

// export default async function handler(request: NextRequest) {
//   const { email } = await request.json();

//   if (!email) {
//     throw new Error("Enter a valid email");
//   }

//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//       select: {
//         user_status: true,
//       },
//     });

//     return NextResponse.json(user);
//   } catch (error: unknown) {
//     // Type assertion to let TypeScript know that error is an instance of Error
//     if (error instanceof Error) {
//       console.error(error); // Log the error for debugging
//       return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
//     } else {
//       // Fallback in case the error isn't an instance of Error
//       console.error('Unexpected error:', error);
//       return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     }
//   }
// }
