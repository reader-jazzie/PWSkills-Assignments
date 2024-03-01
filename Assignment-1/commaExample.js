/* Comma Operator is used for multiple expressions at a place that require single expression. it exexcutes from left to right and right expession
*/

const func1=()=>
{
    console.log("one");
    return 'one';
}

const func2=()=>
{
    console.log("two");
    return 'two';
}
const func3=()=>
{
    console.log("three");
    return 'three';
}

let x = (func1(),func2(),func3());
console.log(x);
