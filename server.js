//Importing and setting all environmental variables into a single object
    //WE NEED to put this line of code FIRST and at the TOP of our applicaiton, so that the computer LOADS all of our environmental variables first
require("dotenv").config(); //With ths line of code, we are telling the computer to put all the environmental variables we will need/use into a single object instead of in a variable (like with express or other modules)
    //The "dotenv" package will look for the .env file, becuase ALL of our environmental variables will be stored there

//Import
const express = require('express');


//Create Instance of express() into a variable
const app = express();

//Route 
app.get('/', (req, res) => {
  res.send('The server is running');
});

//Start and Run Express Server
app.listen(3000, () => {
  console.log('Listening on port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`); //This syntax is how we access our environmental variables (variables found inside the .env file)
});

//Using Environment Variables in Node.js
 //We can access our environment variables form within our .env file with the following syntax:   process.env.VARIABLE_NAME
 //We can view our variable's value in our terminal, but NOT in the front-end console (browser), so it keeps it a secret

 //We can also use a .gitignore file and store all the file names we DON"T want to push into GitHub (GitHub will "ignore" these files): Best practice to put module packages in here and other sensitive data that we DO NOT want public access to (api keys/tokens, passwords, etc)

 //When other developers clone our repo that has an environmental varaible, they WILL NOT clone OUR environmental variable and its value - they have to CREATE their own environmental variable and value to be able to run the application (this higlights the concept of having different environments for the same application, because each environmental variable and its value will be different)
