import {prisma} from '@/app/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request: NextRequest){
try{
    const body = await request.json();
    const {note} = body ;

    if(!note){
        return NextResponse.json({error: 'Note is required'}, {status: 400});
    }

    const savedNote = await prisma.privacy_notes.create({
        data :{
            note,
        },
    })
    console.log('notes saved in db')

    return NextResponse.json({message: 'Note saved successfully', savedNote}, {status: 200});

}
catch (error){
    console.error('Error saving note', error);
    return NextResponse.json({error:'Failed to dave note'},{status:500});
}
}