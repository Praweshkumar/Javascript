// forEach loop in Arrays..//  (higher oder function/methods)

/* arr.forEach(callBackFunction)
Callbackfunction: Here,it is a function to execute for each element in the array

*A callback is a function passed as an argument to another function.     |   ** parameter in callback function                                                               |
arr.forEach((val)=>{                                                     |  1.(val/items)   2.(idx/pos) 3.(arr)
  console.log(val);                                                      |  
})                                                                       |
                                                                         
*/

// let arr=[1,2,3,4,5,6,7];
// arr.forEach(function printVal(val){  // value at each index means--> val
//   console.log(val);
// })

let arr=["delhi","kolkata","bihar","mumbai","pune"];              
   //  ** parameter in callback function
arr.forEach(function printVal(val,idx,arr){                         //  1.(val/items)   2.(idx/pos) 3.(arr)
//   console.log(val);
  console.log(val.toUpperCase(),idx,arr);      //coverted str in Uppercase
})
















