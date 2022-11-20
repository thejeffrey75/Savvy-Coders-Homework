//declare and creaate array for pizza toppings
let pizzaToppings= ["Sausage","Spinach", "Ham", "Mushrooms"];
//create function to greet customer
function greetCustomer(){

  let greeting = `Welcome Customer! Here are our toppings: `;
  for(let topping of pizzaToppings){
    greeting += `${topping}`;
}
console.log(greeting);
}
greetCustomer();
//creat a function to create pizza orders
function getPizzaOrder(size,crust,...toppings) {
  let orderUp = `One ${size} ${crust} crust pizza with ${toppings} coming up! `;
  //for (let topping of toppings){
    //orderUp += `${topping}`;
  //}
console.log(orderUp);
  return [size,crust,toppings];
}
//Return getPizzaOrder function

getPizzaOrder('large','thin', 'sausage', 'ham', 'spinach');

// // create a function to prepare pizzas
function preparePizza (size, crust, toppings){
  console.log(`The pizza is on the way!`);
  //create a Pizza object with appropiate key-value pairs
  let pizzaObj  = {
    pizzaSize: size,
    pizzaCrust: crust,
    pizzaToppings: toppings,

  };
   return pizzaObj;
}
 preparePizza(getPizzaOrder('large','thin', 'sausage', 'ham', 'spinach'));

// //create a serve Pizza function
function servePizza(pizzaObj){
let pizzaServed= `Order up! Here's your ${pizzaObj.pizzaSize} ${pizzaObj.pizzaCrust} crust pizza with ${pizzaObj.pizzaToppings}`;
for (let topping of pizzaToppings){
  pizzaServed+=`${topping}`;
}
console.log(pizzaServed);
return pizzaObj;
  }
  servePizza(preparePizza('large','thin', 'sausage', 'ham', 'spinach'));

