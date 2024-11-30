


import {prisma} from '@/app/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request: NextRequest){
    try{
        const body = await request.json();
        const { code} = body;
        const savedCode = await prisma.generated_codes.create({
            data: { code: code },
          });
          await prisma.$disconnect(); // Disconnect Prisma client after handling the request
          return NextResponse.json(savedCode)
  
    } catch (error) {
      console.error('Error generating code:', error);
    }
  

    
  }
  



