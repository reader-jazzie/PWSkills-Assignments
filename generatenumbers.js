const prompt=require("prompt-sync")();
let num1=parseInt(prompt("Enter the first number"));
let num2=parseInt(prompt("Enter the second number"));
let i;
for(i=num1+1; i<=num2 ; i++)
{
    console.log(i);
}