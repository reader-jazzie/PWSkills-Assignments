const prompt= require('prompt-sync')();
let numbers=parseInt(prompt('Enter a marks'));

if(numbers > 90)
{
    console.log("Student has scored A Grade");
}

else if(numbers >= 70 && numbers <= 90 )
{
console.log("Student has scored B Grade");
}

else if(numbers >= 50 && numbers < 70)
{
 console.log("Student has scored C grade");
}

else
{
    console.log("Student has failed");
}