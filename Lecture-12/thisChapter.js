                 //...Callbacks, Promises & Async Await...//

/* What this chapter is about ?
   
       async await >> promise chains >> callback hell

1. Sync in Js(Synchronous)==> Synchronous means the code runs in a particular sequence of instructions given in the program.
                              Each instruction waits for the previous instruction to complete its execution.       

2. Asynchronous ==> Due to synchronous programming,sometimes imp instructions get blocked due to some previous instructions,
                    which causes a delay in the UI.Asynchronous code execution allows to execute next instructions
                    immediately and doesnt block the flow.


                 //...Callbacks...//   

A callback is a function passed as an argument to another function.

              //..Callback Hell..//

Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.
               (Pyramid of Doom)

This style of Programming becomes difficult to understand & manage.
 
                   
                    //...Promises...//

Promises is for "eventual" completion of task.It is an object in JS.
It is a solution to callback hell.

let promise = new Promise((resolve,reject)=>{               | **Three sates of Promises**
       //....                  / \                          | 1.Pending state.
})                           function with 2 handlers       | 2.fullfilled(resolve) state.
                                                            | 3.rejected state.     
*resolve & reject are callbacks provided by Js.

A javascript Promise Object can be :
1.Pending:  the result is undefined 
2.Resolved: the result is value(fullfilled)    resolve(result)
3.Rejecetd: the result is an error object      reject(error)

*Promise has state(pending,fullfilled) & some
result(result for resolve & error for reject).

//Promises

.then()&.catch()

promise.then((res)=>{...})
promise.catch((err)=>{...})

               // Async-Await //

 async function always returns a promise.
 
 async function myFunc(){
       .....//
 }

 await pauses the execution of its surrounding async function untill the promise is settled.

     //IIFE :immediately invoked Function expresssion
    
     (function (){
       //..
     })();

     (() =>{
       //...
     })();

     (async ()=>{
       //...
     })();


*/






































































