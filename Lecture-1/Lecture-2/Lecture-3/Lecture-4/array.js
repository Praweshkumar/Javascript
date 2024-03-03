//Arrays in js..===>>collections of items....

//create array...

// let marks=[45,67,30,89,93,85,70];
// console.log(marks);
// console.log(marks.length);

let heroes=["ironman","hulk","thor","spiderman","batman","shaktiman"];
// console.log(heroes);
// console.log(heroes.length);

// let score=[93,34,67,2,10,47,82,63];
// console.log(score);
// console.log(score.length);

// Array indices===>> arr[0],arr[1],arr[2]...

// important points to remember---> (..strings are immutable in javascript..)
//                                  (..array are mutable in javascript it can change..) 


//looping over an Array...==>print all elements of an array...//

console.log(heroes[0]);  //first methods thats not good we will use loops
console.log(heroes[1]);
console.log(heroes[2]);
console.log(heroes[3]);
console.log(heroes[4]);
console.log(heroes[5]);

count=0;   //second methods using for loop

for(let count=0;count<heroes.length;count++){
    console.log(heroes[count]);
}

//for-of loop....

for(let hero of heroes){
    console.log(hero);
}

 let cities=["delhi","banglore","pune","hyderabad","Noida"];
for(let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
}




































