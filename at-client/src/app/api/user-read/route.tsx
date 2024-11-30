import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
    const { code } = body;

    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }

    // Query the database to check if the code exists
    const existingCode = await prisma.generated_codes.findFirst({
      where: { code },
    });

    // Return true if the code exists, otherwise false
    return NextResponse.json({ exists: !!existingCode }, { status: 200 });
  } catch (error) {
    console.error('Error checking code in database:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
