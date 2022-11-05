//Declare and initialize variables
let pizzaPlace ="Krusty Krab Pizza";
let numberOfToppings=15;

//Print variable type(Simple answer)
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
//Print variable type (complicated answer)
console.log(`${pizzaPlace} is a ${typeof pizzaPlace}`)
console.log(`${numberOfToppings} is a ${typeof numberOfToppings}`)
//Use a temperal literal
console.log(`Don't wait any longer! ${pizzaPlace} has the best pizza in town with over ${numberOfToppings} different toppings, you'll never have a dull slice again.`)
//Create an if statement for numberOfToppings variable
if (numberOfToppings>=10){
  console.log("A whole lot of pizza");
}
else{
    console.log("Quality, not quantity.")
}

