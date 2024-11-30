import {prisma} from '@/app/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'

async function getUserStatusFromDatabase(email: string): Promise<string | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        user_status: true, 
      },
    });
  
    return user?.user_status || null; 
  }
  