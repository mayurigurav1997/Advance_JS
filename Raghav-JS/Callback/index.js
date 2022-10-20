console.log("Making a call");
console.log("Calling ringing sound");

setTimeout(function () {
    console.log("Call connected");
}, 1000);
console.log("Conversation started");
console.log("Conversation ended");

const compute = (n1, n2, callback) => {
    callback(n1, n2);
    console.log("Callback is executed");
};
const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
console.log(compute(1, 2, add));
console.log(compute(1, 2, sub));


function greeting(name) {
    console.log(`Hello ${name}.Welcome `);

}
function displayFullname(firstname, lastname, callback) {
    const fullname = `${firstname} ${lastname}`;
    callback(fullname);

}
displayFullname("Mayuri", "Gurav", greeting);

const dosomething = (callback) => {
    setTimeout(() => {
        const data = ["apple", "banana", "orange"];
        callback(false, data);
    }, 3000);
}
const callback = (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
}
dosomething(callback);

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const display = (callback, n1, n2) => {
    return callback(n1, n2);
}
console.log(display(sum, 9, 8));
console.log(display(mult, 9, 8));

const upper = (str) => {
    console.log(str.toUpperCase());
}
const reverse = str => console.log(str.split("").reverse().join(""));
const display1 = (callback, input) => {
    console.log("Hi");
    console.log(`Hello ${input}`);
    callback(input);
}
display1(upper, "mayuri");
display1(reverse, "mississipi");