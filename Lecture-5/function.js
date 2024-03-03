// Functions in js....

/* 

 function==>>block of code that performs a specific task,can be invoked whenever needed...
**function definition**
function functionName(){                               |  functionm call
    // do somework                                     |  functionName();
}                                                      |
function functionName(param1.param2...){               | important Note:functions parameter like local variables of function.
    //do somework                                      |   -->(block scope.)
}                                                      |    
                                                     
*/


function myFunction() {
    console.log("welcome prawesh");
    console.log("you are coder");
}
myFunction();
myFunction();

//egamples...

function myFunction(msg) {
    //parameter->input
    console.log(msg);
}
myFunction("I love js");     //argument

//function->2 numbers,sum

function printsum(x,y){
    console.log(x+y);
}
printsum(10,20);
printsum(100,35);


function sum(x, y) {
    //local variable(inside this scope)
    s=x+y;
    return s;
    console.log("after return");  ///after return code is not executed after return
}
// let val=sum(1,2);
let val=sum(101,102);
console.log(val);






























