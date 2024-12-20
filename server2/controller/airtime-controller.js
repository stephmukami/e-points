// Set your app credentials
require('dotenv').config();

const credentials = {
    apiKey: process.env.API_KEY,
    username:'sandbox',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the airtime service
const airtime = AfricasTalking.AIRTIME;


async function sendAirtime(req,res,next) {
    try{
        const {phoneNumber,airtimeAmount} = req.body;
        console.log("phone number is ",phoneNumber);
        console.log("airtime amout is ",airtimeAmount);

        const options = {
            maxNumRetry: 3, // Will retry the transaction every 60seconds for the next 3 hours.
            recipients: [{
                phoneNumber,
                currencyCode: "KES",
                amount: airtimeAmount
            }]
        };
      
        // That’s it hit send and we’ll take care of the rest
        airtime.send(options)
            .then(response => {
                console.log(response);
                return res.status(200).json(response);
            }).catch(error => {
                console.log(error);
            });
      
      

    }catch(error){
        console.error(error);
        return res.status(500).json({message:"Error making airtime request"})
    }
  
}

module.exports = sendAirtime;