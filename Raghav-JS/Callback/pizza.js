const time=1000;

//Callback hell
// Raise a dough
function raiseDough(callback){
  console.log("Waiting a dough");
  setTimeout(() => {
    console.log("Dough is ready");
    callback();
  },5*time);
}
//Rolling a dough
function rollingDough(callback){
  console.log("Rolling a dough");
  setTimeout(() => {
    console.log("Dough is rolling");
    callback();
  },3*time);
}
//Pouring a sauce 
function pourSauce(callback){
  console.log("Pouring a sauce");
  setTimeout(() => {
    console.log("Sauce is pouring");
    callback();
  },1*time);
}

//Add topping
function addTopping(callback){
  console.log("Adding a topping");
  setTimeout(() => {
    console.log("Topping is added");
    callback();
  },2*time);
}

//Bake the pizza 
function bakePizza(callback){
  console.log("Baking a pizza");
  setTimeout(() => {
    console.log("Pizza is ready");
    callback();
  },8*time);
}


//Deleivery the pizza
function deleiveryPizza(callback){
  console.log("Deleivery a pizza");
  setTimeout(() => {
    console.log("Pizza is deleivered");
    callback();
  },5*time);
}

//Lets combine all function and Nested them one inside another
raiseDough(() => {
  rollingDough(() => {
    pourSauce(() => { 
      addTopping(() => {
        bakePizza(() => {
          deleiveryPizza(() => {
            console.log("Pizza is Deleivered succsessfully");
          })
        })
      })
    })
  })
})