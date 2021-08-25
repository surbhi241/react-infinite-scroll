const _ = require("lodash");

const deepObject = {
    firstname: "surbhi",
    lastname: "soni",
    calculateAge: (age) => {
        return age
    },
    skills: {
        primary: "Frontend", secondary: "Reactjs"
    }
}    

const developer1 = {...deepObject}; //shallow cloning 
const developer2 = _.cloneDeep(developer1); // deep cloning using lodash
developer2.skills.primary = "FullStack"; // it won't change as  has deep cloned

console.log("deepObject", deepObject);
console.log("developer1 with object destrcuture", developer1);
console.log("developer2 using lodash", developer2);