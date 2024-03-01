const prompt =require("prompt-sync")();
const mode=prompt("Enter the mode of payment:  ");

switch(mode)
{
    case "debit": console.log("Debit card will charge 1.5% processing fee"); break;
    case "credit": console.log("Credit card will charge 2% processing fee"); break;
    case "paypal": console.log("Paypal will charge 3% processing fee"); break;
    
}