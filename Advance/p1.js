let codeword = "Hulk";

function spaceShip() {
    let question = "Please provide the code word";
    function codeWordCheck() {
        let password = "Hulk";
        console.log(question);

        if(password == codeword){
            console.log(codeword + " is strong");
        }
        else{
            console.log("Access Denied")
        }
    }
    codeWordCheck();
}
spaceShip();