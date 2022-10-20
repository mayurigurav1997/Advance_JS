let countriesInfo = [
    {
        name: "India",
        population: " 1,394,975,829",
        region: "Asia",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
        capital: "New delhi"
    },
    {
        name: "Germany",
        population: "81,770,900",
        region: "Europe",
        flag:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        capital: "Berlin"
    },
    {
        name: "United states",
        population: "323,947,000",
        region: "Americas",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
        capital: "Washington D.C"
    },
    {
        name: "Brazil",
        population: "206,135,893",
        region: "Americas",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
        capital: "Brasilia"
    },
    {
        name: "Iceland",
        population: "334,300",
        region: "Europe",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
        capital: "Reykjavik"
    },
    {
        name: "India",
        population: " 1,394,975,829",
        region: "Asia",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
        capital: "New delhi"
    },
    {
        name: "Germany",
        population: "81,770,900",
        region: "Europe",
        flag:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        capital: "Berlin"
    },
    {
        name: "United states",
        population: "323,947,000",
        region: "Americas",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
        capital: "Washington D.C"
    }
];

//   <!-- <div class="container">
//         <img class="flag" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png" alt="Flag">
//         <div class="info">
//             <h2>India</h2>
//             <p><strong>Population:</strong>1,23,67,000</p>
//             <p><strong>Population:</strong>Asia</p>
//             <p><strong>Capital:</strong>New Delhi</p>
//         </div>
//     </div> -->

// const countryInfoContainer = document.createElement("div");
// countryInfoContainer.setAttribute("class","info");

// const countryName = document.createElement("h2");
// countryName.innerText = "India";
// // countryInfoContainer.append(countryName);

// const population = document.createElement("p");
// population.innerText = "Population:1,394,975,829";
// // countryInfoContainer.append(population);

// const region = document.createElement("p");
// region.innerText = "Region:1,394,975,829";
// // countryInfoContainer.append(region);

// const capital = document.createElement("p");
// capital.innerText = "Capital:1,394,975,829";

// countryInfoContainer.append(countryName,population,region,capital);
// document.body.append(countryInfoContainer);

// const list = document.createElement("ul");
// list.innerHTML = `<li>Badminton</li>
//                   <li>Travelling</li>
//                   <li>Boryani</li>
//                   <li>Cricket</li>
//                   <li>Music</li>`;

// document.body.append(list);

function createCountry(country) {
    const countryContainer = document.createElement("div");
    countryContainer.setAttribute("class", "container");
    countryContainer.innerHTML = `
    <img class="flag" src=${country.flag} alt=${country.name}>
    <div class="info">
        <h2>${country.name}</h2>
        <p><strong>Population:</strong>${country.population}</p>
        <p><strong>Region:</strong>${country.region}</p>
        <p><strong>Capital:</strong>${country.capital}</p>
    </div>`;
    document.body.append(countryContainer);
}

// for(i in countriesInfo){
//     createCountry(countriesInfo[i]);
// }


const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = () => {
        const countries = xhr.response;
        console.log(countries);
        for(let country of countries){
            const countryAdaptor = {
                ...country,
                name:country.name.common,
                flag:country.flags.svg
            }
            createCountry(countryAdaptor);
        }
        }
}
const countries = getCountries();