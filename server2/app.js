require('dotenv').config();
const credentials = {
    apiKey: process.env.API_KEY,
    Username: process.env.USERNAME
  }
const africastalking = require('africastalking')(credentials);

airtime = africastalking.AIRTIME;

const options = {
    recipients: [
      {
        phoneNumber: '+254797645137',
        amount: 5,
        currencyCode: 'KES'
      }
    ]
  };
  


airtime.send(options)
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });