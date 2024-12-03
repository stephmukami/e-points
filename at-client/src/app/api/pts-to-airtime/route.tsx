import { prisma } from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import africastalking from 'africastalking';
import dotenv from "dotenv";
// access the db when one taps the button to redeem airtime

// confirm the balance of points then send the post request to the at api

dotenv.config();
const conversionAmount:number = 5;
const airtimeAmount: number=5;

const credentials = {
    apiKey : process.env.API_KEY as string,
    username: process.env.USERNAME as string,
}
const airtime = africastalking(credentials).AIRTIME 

async function sendAirtime(phoneNumber:number,airtimeAmount:number){ //fetch phone numer form email in db call first
    const options = {
        recepients:[
            {
                phoneNumber,
                airtimeAmount,
                currencyCode: 'KES'
            }
        ]
    };
    try{
        const response = await airtime.send(options);
        console.log("Airtime sent", response);
        return {success: true,response}; //might have to return as a next response 
    }catch(error){
        console.error('Error sending airtime',error);
        return {success:false,error};
    }

}

export async function POST(request: NextRequest) {
    const { email,phoneNumber} = await request.json();


    if (!email || !phoneNumber) {
        throw new Error ("email and phone number required ");
    }

    try {

        const user = await prisma.user.findUnique({where:{email}});
        if (!user){
          console.error('user not found',email);
          return NextResponse.json({error:'User not found'},{status:404});
        }
        //confirm if the points are enough then invoke the api logic
        const userPoints = await prisma.airtime_points.findUnique({
            where:{user_id:user.user_id},
            select:{points:true},
        });

        if (!userPoints || userPoints < conversionAmount){
            return NextResponse.json({error: 'Insufficient points for airtime conversion'});
        }
        //const amount = airtime.points; //confirm if the points are mapped to the correct user and if this is needed
        const sendResponse = await sendAirtime(phoneNumber,airtimeAmount);

        if(! sendResponse.success){
            return NextResponse.json({error:'error in sending airtime',details : sendResponse.error},{status:500});
        }

        //reducing the amount of user points
        await prisma.airtime_points.update({
            where:{user_id:user.user_id},
            data:{points:{decrement:conversionAmount}}
        });

        return NextResponse.json({success:true,message:'Airtime sent successfully',details:sendResponse.response})
}
  
    catch(error) {
        console.error('Error processing request',error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
}



//fetch amount of airtime redeemed 