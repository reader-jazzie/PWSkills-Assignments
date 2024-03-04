const contactInfo=new Map();

//Adding contacts to maps

contactInfo.set("John",{
    age:23,
    email:"john_cool@gmail.com",
    location:"california",
});
contactInfo.set("Jennifer",{
    age:33,
    email:"jennifer2015@yahoo.co.in",
    location:"texas",
});
contactInfo.set("Amanda",{
    age:26,
    email:"reader.amanda@yahoo.co.in",
    location:"boston",
});

const getContact=(name)=> {return contactInfo.get(name);}
console.log(getContact("John"));