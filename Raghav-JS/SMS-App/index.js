let maxcount = 100;

let smstypefunc = () => {
    //get the value of a text enter by user with length

    let textEnteredLength = document.querySelector("#text-area").value.length;
    console.log(textEnteredLength);

    let spanTag = document.querySelector("#chars");

    let remainingCount = maxcount - textEnteredLength;
    spanTag.innerText = remainingCount;
}

let changePassword = () => {
    let passwordBox = document.querySelector("#pass-box");
    let theattribute = passwordBox.getAttribute("type");
    if(theattribute === "password"){
        passwordBox.setAttribute("type","text");
    }
    else{
        passwordBox.setAttribute("type","password");
    }
}

let likesCount = 0;
let dislikesCount = 0;
let total = 0;

let liked = () => {
    likesCount++;
    total++;
    document.querySelector("#likes").innerText = likesCount;
    document.querySelector("#total").innerText = total;
}
let disliked = () => {
    dislikesCount++;
    total++;
    document.querySelector("#dislikes").innerText = dislikesCount;
    document.querySelector("#total").innerText = total;
}