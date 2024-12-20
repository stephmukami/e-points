import { prisma } from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// access the db when one taps the button to redeem airtime

// confirm the balance of points then send the post request to the at 

//fetch the amount of points from the db and show the redeemed airtime 

export async function POST(request: NextRequest) {
    const { email, action } = await request.json();


    if (!email) {
        throw new Error ("email required ");
    }

    try {

        const user = await prisma.user.findUnique({where:{email}});
        if (!user){
          console.error('user not found',email);
          return NextResponse.json({error:'User not found'},{status:404});
        }

        switch(action){
            case 'fetchUserPoints':{
                const userPoints = await prisma.airtime_points.findUnique({
                    where:{user_id:user.user_id},
                    select:{points:true},
                });

                if (!userPoints){
                    return NextResponse.json({points:0});
                }

                return NextResponse.json(userPoints)


            }

            case 'fetchRedeemedAirtime':{
                const userRedeemedAirtime = await prisma.airtime_points.findUnique({
                    where:{user_id:user.user_id},
                    select:{redeemed_airtime:true},
                });

                if (!userRedeemedAirtime){
                    return NextResponse.json({redeemed_airtime:0});
                }

                return NextResponse.json( userRedeemedAirtime)



            }
          
        }

      
       
    


    } 
    catch {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
}



//fetch amount of airtime redeemed 