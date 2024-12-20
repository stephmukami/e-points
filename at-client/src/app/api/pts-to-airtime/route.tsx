import { prisma } from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
// access the db when one taps the button to redeem airtime

// confirm the balance of points then send the post request to the at api


const conversionAmount:number = 1
const airtimeAmount: string = "5";

export async function POST(request: NextRequest) {
    const { email} = await request.json();


    if (!email) {
        throw new Error ("email is required ");
    }

    try {

        const user = await prisma.user.findUnique({
            where:{email},
            select:{phone_number:true,user_id:true},
        });
        
        if(!user || !user.phone_number){
            return NextResponse.json({error:"User not found"},{status:404});
        }
        //find the phone number by email
        //confirm if the points are enough then invoke the api logic
        const userPoints = await prisma.airtime_points.findUnique({
            where:{user_id:user.user_id},
            select:{points:true},
        });

        if (!userPoints || userPoints.points < conversionAmount){
            return NextResponse.json({error: 'Insufficient points for airtime conversion'});
        }
        //const amount = airtime.points; //confirm if the points are mapped to the correct user and if this is needed
  
        // const sendResponse = await sendAirtime(user.phone_number,airtimeAmount);
        let formattedNumber = user.phone_number;
            if (user.phone_number.startsWith("07")) {
                formattedNumber = "+254" + user.phone_number.slice(1);
            }

        const sendResponse = await axios.post('http://localhost:8080/api/send-airtime', {
            phoneNumber: formattedNumber,
            airtimeAmount: airtimeAmount,
          });

          const { errorMessage, responses } = sendResponse.data;//should they be read too

        // if(!success){
        //     return NextResponse.json({error:'error in sending airtime',details : error},{status:500});
        // }

        if (errorMessage === 'None' && responses[0]?.status === 'Sent') {
        //reducing the amount of user points
        await prisma.airtime_points.update({
            where:{user_id:user.user_id},
            data:{points:{decrement:conversionAmount}}
        });

        return NextResponse.json({success:true,message:'Airtime sent successfully',details:sendResponse.data})

        }
        return NextResponse.json({error:'error in sending airtime',details : errorMessage},{status:500});

    

}
  
    catch(error) {
        console.error('Error processing request',error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
}



//fetch amount of airtime redeemed 