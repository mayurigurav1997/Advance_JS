let url = "https://62a9708c3b31438554332570.mockapi.io/users";

//Get the data from the Server
function getData() {
    fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    }).then((result) => result.json()).then((data) => {
        console.log(data);
    })
        .catch((error) => {
            console.log(error);
        })
}

getData();


//Post method 
function createData() {
    let data = {
        "name": "Mayuri Gurav",
        "email": "mayuri@gmail.com"
    };
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((result) => result.json()).then((data) => console.log(data));
}
createData();
getData();

//Update method 
function updateData() {
    let data = {
        name: "Omkar",
        email: "omkar@mail.com"
    }
    fetch(url + "/1", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((result) => result.json()).then((data) => { console.log(data);})
    .catch((error) => {
        console.log(error);
    });
}
updateData();
getData();

//Delete method
function deleteData(){
    fetch(url+"/8",{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((result) => result.json()).then((data) => { console.log(data);})
    .catch((error) => {
        console.log(error);
    });
}
deleteData();