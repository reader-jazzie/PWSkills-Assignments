const prompt=require("prompt-sync")();
let num = prompt("Enter a number");
(num > 0) ? console.log("Number is positive") : (num < 0) ? console.log("Number is negative"): console.log("Number is Zero")