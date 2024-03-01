const prompt=require("prompt-sync")();
const target_number=prompt("Enter a number :");
let sum=0;
current_num=1;
do{
    sum+=current_num;
    current_num++;

}while(current_num<=target_number)
console.log(`the sum from 1 to ${target_number} is ${sum}`);
