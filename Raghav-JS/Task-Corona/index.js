var form = document.createElement("form");
form.setAttribute("id", "myform");
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("required",true);
var sub = document.createElement("input")
sub.setAttribute("type","submit")
sub.setAttribute("placeholder","search")
document.body.append(form);
form.append(input,sub);

var formres = document.getElementById("myform");
formres.addEventListener("submit", (event) => {
    event.preventDefault();//to overcome default behaviour
    var country = document.getElementById("country").value;
    console.log(country);
    var url = `https://api.covid19api.com/dayone/country/${country}`;

    covid(url);
});
async function covid(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let index = data.length - 1;
    console.log(index);
    let confirmed = document.getElementById("confirmed");
    let recovered = document.getElementById("recovered");
    let deaths = document.getElementById("deaths");
    confirmed.append(`Total confirmed cases: ${data[index].Confirmed}`);
    recovered.append(`Total recovered cases: ${data[index].Recovered}`);
    deaths.append(`Total deaths cases: ${data[index].Deaths}`);
    
}


// const url = `https://api.covid19api.com/dayone/country/`;
// const response = fetch(url + "india");
// response.then(data => data.json())
//     .then(data1 => result(data1))
//     .catch(error => console.log(error));

// function result(data1) {
//     data1.forEach(data => {
//         console.log(`Active:${data.Active} Deaths:${data.Deaths} Recovered:${data.Recovered} Confirmed:${data.Confirmed}`);
//     }
//     );
// }