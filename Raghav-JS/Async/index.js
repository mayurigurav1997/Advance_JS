// async function foo() {
//     try {
//         let res = await bar();
//         console.log(res);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// foo();
// console.log("Hi");
// function bar() {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("Code failed!!")), 3000));
// }

function foo(num){
    return new Promise((resolve, reject) =>setTimeout(() => resolve(2*num),3000));
}
async function bar(){
    try {
        var res1 = await foo(2);
        console.log(res1);

        var res2 = await foo(res1);
        console.log(res2);

        var res3 = await foo(res2);
        console.log(res3);
    }catch(error){
        console.log(error);
    }
}
bar();