setTimeout(() => {
    console.log('I will execute after 5000 ms')
}, 5000);
// 1s=1000ms// 

function displayData() {
    console.log("I will execute after 3000 ms")
}
let setTimer = setTimeout(displayData, 3000);
setTimeout(() => {
    clearTimeout(setTimer)
},2000);


// setTimeout ->web api function that execute your code only for once delay time is overlet i=0;
//first argument is function seconf if time in ms

let fruits = ["papaya", "Mangoes", "Oranges", "Pinapple", "Grapes"];
let i = 0;
function displayFruit() {
    console.log(fruits[i])
    i++;
}
let setTimer1 = setInterval(displayFruit, 1000); 
setTimeout(() => {
    clearTimeout(setTimer1);
    console.log("setInterval is cleared");
},5000);
// setInterval(() => { }, interval);
// setTimeout(() => { }, timeout);
// setInterval(fun, timeout)

