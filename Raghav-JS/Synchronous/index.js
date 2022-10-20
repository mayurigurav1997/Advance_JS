// console.log("App is started");
// setTimeout(() => {console.log("App is under development")},2000);
// console.log("App is completed");
// setTimeout(() => {console.log("App is under deployment")},1000);


// var f1=() => {
//     f2();
//     f3();
//     console.log("say Hello");
// }
// var f2=() =>{
//     console.log("say Hi");
// }
// var f3=()=>{
//     console.log("say Bye")
// }
// f1();

// //Call back hell
// function f1(){
//     f2();
//     function f2(){
//         f3();
//         function f3(){
//             console.log("Hi");
//         }
//     }
// }
// f1();

function foo(names,saybye){
    console.log("Welcome to foo!!");
    saybye(names);
}
function bar(names){
    console.log("Welcome to bar"+ names);
}
setTimeout(foo,2000,"john doe",bar);
