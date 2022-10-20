// var age = parseInt(prompt("Enter the 23Age!!"));
// const p1 = new Promise((resolve, reject) => {
//     // resolve("Its is done")
//     if(age>=18){
//         resolve("You are eligible to vote!!");
//     }
//     else{
//         reject("Not eligible to vote");
//     }
//     console.log("HI");
// });

// console.log(p1);
// console.log("I am girl");
// console.log("I am boy");
// HI
// promise.js:13 Promise {<fulfilled>: 'You are eligible to vote!!'}
// promise.js:14 I am girl
// promise.js:15 I am boy

// function foo() {
//     return new Promise((resolve, reject) => setTimeout(() => reject("this is rejected after 3 sec"), 3000)
//     );
// }
// foo().then((data) => console.log(data)).catch((error) => console.log(error));

let p = new Promise((resolve, reject) =>{
    console.log("HI");
    let a= 2+2;
    if(a==4){
        resolve("a is 4");
        console.log("HI 2");
    }
    else{
        reject("a is different")
    }
    console.log("Hello");
})
console.log(p);
p.then((data) => console.log(data));
console.log("Bye");

// Promise Chaining
// function foo(num){
// return new Promise((resolve,reject)=>setTimeout(()=>resolve(2*num),3000));
// }
// function bardata(num){
//     return new Promise((resolve,reject)=>setTimeout(()=>reject(12*num+"This is rejected number"),3000));
// }
// foo(2).then((data)=>{
//     console.log(data);
//     //foo(4)
//     return foo(data);
// }).then((data1)=>{
//     console.log(data1);
//     //foo(8)
//     return bardata(data1);
// }).then((data2)=>console.log(data2)).catch((error)=>console.log(error));

//promsie.all
// var p1=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("Your promise1 is resolved!!"),3000);
//     }
//     else{
//         setTimeout(()=>reject("Your promise1 is rejected!!!"),3000);
//     }


// });
// var p2=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("Your promise2 is resolved!!"),2000);
//     }
//     else{
//         setTimeout(()=>reject("Your promise2 is rejected!!!"),2000);
//     }


// });

// var p3=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("Your promise3 is resolved!!"),4000);
//     }
//     else{
//         setTimeout(()=>reject("Your promise3 is rejected!!!"),4000);
//     }


// });

// // p1.then((data)=>console.log(data)).catch((error)=>console.log(error));
// // p2.then((data1)=>console.log(data1)).catch((error)=>console.log(error));
// // p3.then((data2)=>console.log(data2)).catch((error)=>console.log(error));
// Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));
// Promise.all();
// it is going to take the array of Promises
// it will wait untill all the promise  are resolved
// the output will  be an  array of resolved promises 

// Promise.allSettled();
//  it is going to return  all the promise which is  either resolved or rejected
// var p1=new Promise((resolve,reject)=>resolve("this is resolved p1"));
// var p2=new Promise((resolve,reject)=>reject("this is reject p2"));
// Promise.allSettled([p1,p2]).then((data)=>console.log(data)).catch((error)=>console.log(error));

// function p() {
//     return new Promise((resolve, reject) => {
//         console.log("HI");
//         let a = 2 + 2;
//         if (a == 4) {
//             resolve("a is 4");
//         }
//         else {
//             reject("a is different")
//         }
//         console.log("Hello");
//     })
// }
// console.log(p());
// console.log("Bye");


// let odd_even = async (number) => {
//     console.log("Hi")
//     if (number % 2 == 0) {
//         return await "Even";
//     } else {
//         return await "Odd";
//     };
//     console.log("Hello")

// };
// odd_even(5).then(data => console.log(data)
// );
// console.log("Bye");