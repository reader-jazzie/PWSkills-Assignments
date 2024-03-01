const prompt=require("prompt-sync")();
const number=parseInt(prompt("Enter a number"));

let square;
const squareNumber=()=>{
    square=number*number;
    console.log(`the square of {number} is : ${square}`);
}
squareNumber();