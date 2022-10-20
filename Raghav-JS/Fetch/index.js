//Code for the Rest countries 

var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
console.log(res);
res.then((data) => data.json())
    .then((value) => {
        console.log(value);
        result(value);
    })
    .catch((error) => console.log(error));

function result(res) {
    for (var i = 0; i < res.length; i++) {
        //print the flags
        console.log(res[i].flag);
    }

    //print all countries in ASIA
    let asiac = res.filter((ele) => ele.region === "Asia");
    console.log(asiac);

    //print the all countryname, capital, flag that comes under asia region
    let asiac1 = res.filter((ele1) => ele1.region === "Asia")
        .forEach((ele1) => { console.log(`CountryName : ${ele1.name} , Capital: ${ele1.capital}, Flag: ${ele1.flag}`) });

    //print the sum of the total population in the asia Region
    let population = asiac.reduce((sum, curr) => {
        sum += curr.population;
        return sum;
    },0);
    console.log(`Population is : ${population}`);

}