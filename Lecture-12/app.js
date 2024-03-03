    //   Synchronous programming...// (print in a sequence)

// console.log("one");
// console.log("two");
// console.log("three");

//        // Asynchronous programming..

// function hello(){
//     console.log("hello");
// }       
// setTimeout(hello,2000);   //2s=2000ms.
// setTimeout(hello,4000);  // 4s=4000ms.

// console.log("first");
// console.log("second");

// setTimeout({} =>{
//     console.log("hello");
// },4000);

// console.log("three");     // asynchronous programming happened
// console.log("four");

                // Callback //

              // synchronous programming ka callback

//   function sum(a,b){         
//     console.log(a+b);
// }     
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// // calculator(1,2,sum);
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });


// const prawesh =()=>{
//     console.log("prawesh");
// }
// setTimeout(prawesh,3000);

               // Callback Hell //

// function getData(dataId,getNextData){
    // setTimeout(() =>{
    // console.log("data",dataId);
    // if(getNextData){
    //     getNextData();
    // }
    // },2000);  
// }
//     // this is nested callback hell below here....
// getData(1,()=>{
//     console.log("getting data2....")
//     getData(2,()=>{
//         console.log("getting data3....")
//         getData(3,()=>{
//             console.log("getting data4....")
//             getData(4);
//         });
//     });
// });
// getData(2);
// getData(3);

                   //..Promises..//

// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     // resolve("Success");
//     reject("some error ocured");
// });

          // promise then and catch //

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             // console.log("data",dataId);
//             // resolve("Success");
//             // reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//             },2000);  
//     })
// }

// const getPromise =()=>{
//      return new promise((resolve,reject)=>{
//         console.log("I am a Promise");
//         resolve("Success");
//         // reject(" network error");
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

                 // Promse-Chain //

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout{()=>{
//             console.log("data1");
//             resolve("success");
//         },4000};
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout{()=>{
//             console.log("data2");
//             resolve("success");
//         },4000};
//     });
// // }

// console.log("fetching data1...");
// let p1= asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2...")
//     let p2 =asyncFunc2();
//     p2.then({res}=>{
//         console.log(res);''
// });
// })

//  console.log("fetching data1...");
//  let p1 =asyncFunc1();
//  p1.then((res)=>{
//     console.log(res);
//  });

//  console.log("fetching data2...");
//  let p2 =asyncFunc2();
//  p2.then((res)=>{
//     console.log(res);
//  });
 

// Promise chain

// let p1 =getData(1);
// p1.then((res)=>{
//     console.log(res);
// });

// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });

// Async Await

// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout{()=>{
//         console.log("weather data");
//         resolve(200);
//         },2000};
//     });
// }

// async function getWeatherData(){
//     await api(); //1st call 
//     await api();
// }













                 







