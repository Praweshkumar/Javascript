// Data types....//

/* types:

1.) Primitive data types=> Number,String,Boolean,Undefined,Null,Bright,symbol are primitive.
2.) Non-Primitive data types=> objets formation collection of values are called non-primitive.---> (key: value;)

*/

// primitive types are here..

let age = 24;   //type-number
console.log(age);
let full_name = "rajnish"; //type-strings
console.log(full_name);
let Ispass = "true";  //type-boolean
console.log(Ispass);
let x;              // undefined
console.log(x);

//Non-primitive type are below...//(objects)

const student = {
    fullName: "Chandan",    //ojects ban gya key aur value ke pair mai
    age: 29,
    cgpa: 9.2,
    isPass: true,
};
// student["fullName"]="Rahul sharma";===>> (changes occurs in this)

console.log(student);
console.log(student.age)    // first method.. 
console.log(student["age"]);  // second method..
console.log(student.fullName);
console.log(typeof student);
console.log(typeof student.age);
console.log(student.cgpa);
console.log(student.isPass);
// console.log(student["fullName"]);







































