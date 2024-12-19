// Set your app credentials
require('dotenv').config();

const credentials = {
  apiKey: process.env.API_KEY,
  username: process.env.USERNAME,
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the airtime service
const airtime = AfricasTalking.AIRTIME;


function sendAirtime() {
  const options = {
      maxNumRetry: 3, // Will retry the transaction every 60seconds for the next 3 hours.
      recipients: [{
          phoneNumber: "+254797645137",
          currencyCode: "KES",
          amount: "10"
      }]
  };

  // That’s it hit send and we’ll take care of the rest
  airtime.send(options)
      .then(response => {
          console.log(response);
      }).catch(error => {
          //console.log(error);
          console.log("API Key:", credentials.apiKey);
console.log("Username:", credentials.username);
      });
}

sendAirtime();

console.log("API Key:", credentials.apiKey);
console.log("Username:", credentials.username);