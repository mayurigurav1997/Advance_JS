function myfunc(){
    let x = document.getElementById("heading");
    x.innerHTML = `<h1> Hello World </h1>`
}

document.getElementsByClassName("btn")[0]
.addEventListener("click" ,function(){
    document.getElementsByClassName("list-item")[0].style.color="red";

    let listItem = document.getElementsByClassName("list-item");
    // console.log(listItem);
})

let liElement = document.getElementsByTagName("li");
console.log(liElement);
let firstElement = liElement[0].innerHTML;
console.log(firstElement);

