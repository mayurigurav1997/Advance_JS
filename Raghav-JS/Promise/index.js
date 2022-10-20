// //created a promise object dopromise
// const dopromise=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     const skills=["Html","Css","javascript","React","Node.js"]
//     if(skills.length === 5){
//       resolve(skills);
//     }else{
//       reject("Something is wrong");
//     }
//   }, 2000);
// }
// );

// console.log(dopromise);

// dopromise.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// }).finally(() => {
//   console.log("Finally")
// });

// const value = 5;
// const promiseobj = new Promise((resolve,reject)=>{
//   //Generate a random no using math.random() function
//   const random = Math.floor(Math.random() * 10);
//   console.log(random);
//   //check if the random and value are same or not
//   if(random===value){
//     resolve("Hurry , you guesses the correct no",random);
//   }
//   else{
//     reject("Sorry , you guessed the wrong no",random);
//   }
// })
// console.log(promiseobj);

// promiseobj.then((result)=>{
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// }).finally(() => {
//   console.log("Finally");
// })



// let roomClean=new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Room is cleaned.");
//   }, 2000);
// })

// let removeGarbage=new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Garbage is not removed");
//   }, 2000);
// })

// let GetThePrice=new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Won the price");
//   }, 1000);
// })

// //promise chaining
// // roomClean.then((result)=>{
// //   console.log(result);
// //   return removeGarbage;
// // }).then((result)=>{
// //   console.log(result);
// //   return GetThePrice;
// // }).then((result)=>{
// //   console.log(result);
// // }).catch((error)=>{
// //   console.log(error);
// // });

// // Promise.all Method
// // 1.It method takes an array of promise and return a promise .
// //2.Resolve promise if all promises are fullfilled
// //3.Ifone of the promises gets rejected then it will reject all promise

// let promiseall=Promise.all([roomClean,removeGarbage,GetThePrice]);
// console.log(promiseall);

// let doProject = new Promise((resolve, reject) => {
//   let isProjectDone = true;
//   if (isProjectDone) {
//     resolve("Project is done");
//   }
//   else {
//     reject("Project is not done");
//   }
// });

// let attendedTechnical = new Promise((resolve, reject) => {
//   //attending the technical Interview 
//   let isTechnicalDone = true;
//   if (isTechnicalDone) {
//     resolve("Technical Interview is attend");

//   }
//   else {
//     reject("Technical Interview is not attended");

//   }
// });
// let attendHR = new Promise((resolve, reject) => {
//   let isHRAttended = true;
//   if (isHRAttended) {
//     resolve("HR Interview is attended");
//   }
//   else {
//     reject("HR Interview is not attended");
//   }
// });

// // doProject.then((msg) => {
// //   let themsg = `${msg}`;
// //   attendedTechnical.then((msg) => {
// //     themsg = `${msg}`;
// //     attendHR.then((msg) => {
// //       themsg = `${msg}`;
// //       console.log(`${themsg}.Finally you have attended all round`);
// //     }).catch((msg) => {
// //       console.log(`${msg}`)
// //     }).catch((msg) => {
// //       console.log(`${msg}`)
// //     }).catch((msg) => {
// //       console.log(`${msg}`)
// //     })
// //   });
// // });
// const PromiseCollection = Promise.all([doProject,attendedTechnical,attendHR]);
// PromiseCollection.then((msg) => {
//   console.log(`${msg} is resolved`);
// }).catch((error) => {
//   console.log(`${error} is error`);
// })
