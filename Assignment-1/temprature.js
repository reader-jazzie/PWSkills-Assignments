const prompt=require("prompt-sync")();

const current_temp=prompt("Enter the current temprature");

let wheather= current_temp > 30 ? "Hot": "Moderate";
console.log(`the current condition is ${wheather} `);