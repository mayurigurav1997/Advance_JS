// display the output on console
console.log("Hello WorlD!");

// displays the output on the browser screen
document.write("I am Mayuri");

// const b=120;
// b=150;
// //TypeError: Assignment to constant variable.
const url="http://google.com";
const PORT=5001;
console.log(url+":"+PORT);    //concatenation

//kindly make the JS code compliant to JS-6 version
"use strict";

let num1=5;
if(num1%2==0){
    console.log("even");
}
else{
    console.log("odd");
}

for(let i=0;i<5;i++){
    console.log(i);
}

let data={name:"mayuri",location:"banglore"};
//iterate over json document
for(let key in data){
    console.log(key);
    console.log(data[key]);
}

//print on browser screen
for(let key in data){
    document.write(data[key]);
}