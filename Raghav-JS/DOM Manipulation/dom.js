//1.read the HTML element
console.log("Hi from DOM");
console.log(document.getElementsByTagName("h1"));

const heading = document.getElementsByTagName("h1");
console.log(heading[0].innerText);

const coolElements = document.getElementsByClassName("cool");
console.log(coolElements);
console.log(coolElements[0].innerText);
console.log(coolElements[1].innerText);

console.log(document.getElementById("fun"));
console.log(document.getElementById("fun").innerText);

const headingsQuery = document.querySelectorAll("h1");
console.log(headingsQuery[0].innerText);
console.log(headingsQuery[1].innerText);

console.log(document.querySelectorAll(".cool"));
const coolElementsQuery = document.querySelectorAll(".cool");
console.log(coolElementsQuery[0].innerText);
console.log(coolElementsQuery[1].innerText);

console.log(document.querySelector("#fun").innerText);
console.log(document.querySelector("h1:nth-child(2)").innerText);

document.querySelectorAll("h2").forEach((ele) => console.log(ele.innerText));

//2.Update HTML Element
console.log(document.querySelector(".abc").innerText = "Life is a short, have a dessert first");

console.log(document.querySelectorAll(".todo").forEach((todo) => {
    todo.innerText = "Life is a short, have a dessert first";
}));

//3.Craete HTML element
const beauty = document.createElement("h2");
beauty.innerText = "Dont let small minds convince you that your dreams are too big";
document.body.append(beauty);


const favList = document.createElement("ul");
const favs = ["Badminton","Chess","Movies","Cricket","Travelling"];
for(let fav of favs){
    // console.log(fav);
    const favItem = document.createElement("li");
    favItem.innerText = fav;
    favList.append(favItem);
}
// console.log(favList);
document.body.append(favList);

const userInput = document.querySelector(".username");
console.log(userInput);
userInput.setAttribute("placeholder","Enter your User name");




