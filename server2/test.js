require('dotenv').config();

const apiKey = process.env.API_KEY;
const username = process.env.USERNAME;

console.log("API Key:", apiKey);
console.log("Username:", username);

// Then, use these variables in your API call or authentication logic
