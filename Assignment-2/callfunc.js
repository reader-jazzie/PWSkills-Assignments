person1={
    name:"Jaspreet Kaur",
    age:35,
     introduce(){console.log(`Hello ,I am ${this.name} and I am ${this.age} years old `)}
}

person2={name:"Jasgun Kaur",age:6}

let result=person1.introduce.call(person2);

