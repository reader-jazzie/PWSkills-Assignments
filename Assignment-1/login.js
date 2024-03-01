
const prompt=require('prompt-sync')();
const username=prompt("Enter username:");
const password=prompt("ENter password:");

if(username=='admin' && password=="12345")
{
    console.log("Login Successfull...");
}
else console.log("Invalid credentials.. Try Again..");