

const ages=[19,22,19,24,20,25,26,24,25,24];

// sorting the arrary
let age_sort=ages.sort();
console.log(age_sort);

//finding min value from the array
let min_age=Math.min(...ages);
console.log(min_age);

// finding the max value from the array
let max_age=Math.max(...ages);
console.log(max_age);
 
//finding the range of ages
let range=max_age-min_age;
console.log(`the range of ages is ${range}`);

//calculating an average of ages

const sumAges=ages.reduce((sum,age)=>sum+age,0);
const averageAge=sumAges/ages.length;



// finding the comparing min-average and amx- average

const minDifference=Math.abs(min_age-averageAge);
const maxDifference=Math.abs(max_age-averageAge);
console.log(`Mindifference is ${minDifference}`);
console.log(`Maxdifference is ${maxDifference}`);



//comparing the values of min-average and max-average



//finding a median of ages
function findMedian(ages)
{
    ages.sort((a,b)=>a-b);
    const middle= Math.floor(ages.length /2);
    return ages.length % 2 === 0
    ? (ages[middle-1] + ages[middle]) / 2 : ages[middle];
}

findMedian(ages);
