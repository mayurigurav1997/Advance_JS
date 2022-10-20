//  you have been given a JSON data create a HTML table from it ?

"use strict";

let user_input = [
  { name: "suman gangopadhyay", pincode: 560038, location: "bangalore" },
  { name: "nitin", pincode: 110021, location: "new delhi" },
  { name: "tanushree", pincode: 560068, location: "bangalore" },
  { name: "ravi", pincode: 860457, location: "lucknow" },
];

// table_head

function table_head(table, data) {
  let thead = table.createTHead(); //THead section of my table 
  let row = thead.insertRow();
  for (let key in data) {
    let th = document.createElement("th");
    let text = document.createTextNode(data[key]);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function create_table(table, data) {
  for (let element of data) { // itirate over the data
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(user_input[0]); // kindly tell me 
table_head(table, user_input);
create_table(table, user_input);