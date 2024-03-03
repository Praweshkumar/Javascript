// Array methods...in javascript...//

/*
1.push(): add to end
2.pop(): delete from end & return
3.toString(): converts array to string
4.concat(): joins multiple arrays & returns result
5.unshift(): add to start
6.shift(): delete from start & return
7.slice(): returns a piece of array  ====>  slice(startidx,endidx)
8.splice(): change original array(add,remove,replace)  ===> splice(startidx,delcount,newEl1...)

*/

let foodItems=["patato","apple","litchi","tomato"];
foodItems.push=["paneer","mango"];   //push operation...//
console.log(foodItems);

let marks=[48,93,64,82,73,9,14];
console.log(marks);

// marks.push(66,90);   //push
// marks.pop();      //pop

console.log(marks);

                                // toString()....methods

let students=["rahul","raj","mohan","sanjay","ajay"];
console.log(students);
// console.log(students.toString());  

                                // concat().....methods

let marvelHeroes=["thor","spiderman","ironman"];
let dcHeroes=["superman","batman"];
let indianHeroes=["shaktiman","krish"]

let heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

                                  //unshift()....methods

// marvelHeroes.unshift("antman");

                                  // shift()...methods
                                  
let marvelheroes=["superman","spiderman","thor","ironman"];
// let val=marvelheroes.shift();
console.log(val);

                                 // slice....methods

let Marvel_heroes=["thor","spiderman","ironman","antman","Dr.strange"];
console.log(Marvel_heroes);
// console.log(Marvel_heroes.slice(1,4));

                                // splice...methods
                           
let arr=[1,2,3,4,5,6,7];

// arr.splice(2,2,101,102);

// arr.splice(2,0,101);        //add elements

//arr.splice(3,1);            //delete element

//arr.splice(3,1,101);        //Replace element






