// function hello() {
//     console.log("Hello")
// }

// console.log("first");
// console.log("second");

// setTimeout(() => {   
//     console.log("hello")  // this is asynchronus but not work like this work like synch
// }, 4000);

// console.log("third");
// console.log("fourth");



// function sum(a,b) {
//     console.log(a+b)
// }

// function calculator(a, b, sumCallBack) {
//     sumCallBack(a,b);
// }

// calculator(1,2,sum);

// function getDataId(dataId) {
//     setTimeout(() => {
//         console.log("DataId is ",dataId)
//     }, 2000)
// }

// getDataId(1);
// getDataId(2);
// getDataId(3);   // Execute them in async but here they work in sync

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData)
//         {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2)
// });

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// });


// Call back Hell Nested call back
// getData(1, () => {
//     console.log("waiting for data 2 ...");
//     getData(2, () => {
//         console.log("waiting for data 3 ...");
//         getData(3, () => {
//             console.log("waiting for data 4 ...");
//             getData(4)
//         })
//     })
// });


// let promise = new Promise((resolve, reject) => {
//     console.log("I am Promise"); // until not use resolve, rejected its pending
//     // resolve("success"); // promise status fullfiled
//    // reject("Error Occured"); // promise status rejected
// })

// function getData(dataId, getNextData) {           // this whole promice status is pending
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// function getData(dataId, getNextData) {        // this whole promice status is fullfiled
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// function getData(dataId, getNextData) {        // this whole promice status is rejected
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Error Occured");
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am Promise");
//         // resolve("Success get it");
//         reject("Rejected");

//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise Fulfilled", res);
// })

// promise.catch((err) => {
//     console.log("Rejected Showed...", err)
// })

// promise chaining :- 
// function asyncFunc1(){
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Some Data1");
//         resolve("Success")
//       }, 4000)
//    })
// }

// console.log("Fetching data1...");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// })

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          console.log("Some Data2");
//          resolve("Success")
//        }, 4000)
//     })
//  }
 
//  console.log("Fetching data2...");
//  let p2 = asyncFunc();
//  p2.then((res) => {
//      console.log(res);
//  })

// These is done by Separate but taken time at same 4 sec
// We want them they can execute one by one i.e takes a 4, 4

function asyncFunc1(){
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Some Data1");
        resolve("Success")
      }, 4000)
   })
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         console.log("Some Data2");
         resolve("Success")
       }, 4000)
    })
 }

// console.log("Fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//    //   console.log(res);
//      console.log("Fetching data2...");
//  let p2 = asyncFunc2();
//  p2.then((res) => {
//    //   console.log(res);
//    })
// })

// Short Cut way

// console.log("Fetching data1...");
// asyncFunc1().then((res) => {
//      console.log("Fetching data2...");
// asyncFunc2().then((res) => {
//    })
// })

// function getData(dataId, getNextData) {        
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         }, 3000);
//     });
// }

// getData(1).then((res) => {
//    console.log(res);
//    getData(2).then((res) => {
//       console.log(res);
//    })
// })

// Below Part is Short Cut i.e nothing but
// Promice Chaining ................................... Finally
// getData(1)
//   .then((res) => {
//    return getData(2);
// })
//    .then((res) => {
//       console.log(res); 
// })


//Async Await

function api() {
    return new Promise((reject, resolve) => {
      setTimeout(() => {
         console.log("Wheter Data here");
         // resolve("success");
      }, 2000)
    })
}

async function getWhetherData(){
   await api(); // 1st call
   await api(); // 2nd call
}

function getData(dataId, getNextData) {        
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           console.log("data", dataId);
           resolve("success");
           if(getNextData)
           {
               getNextData();
           }
       }, 2000);
   });
}

// async function getAllData() {
//      console.log("Getting data......1");
//      await getData(1);
//      console.log("Getting data......2");
//      await getData(2);
//      console.log("Getting data......3");
//      await getData(3);
//      console.log("Getting data......4");
//      await getData(4);
//      console.log("Getting data......5");
//      await getData(5);
// }

// IIFE function uses

(async function () {
     console.log("Getting data......1");
     await getData(1);
     console.log("Getting data......2");
     await getData(2);
     console.log("Getting data......3");
     await getData(3);
})();