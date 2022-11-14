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
  for (let topping of toppings){
    orderUp += `${topping}`;
  }
console.log(orderUp);
  return [size,crust,toppings];
}
//Return getPizzaOrder function

let customerOrder= getPizzaOrder('large','thin', 'sausage', 'ham', 'spinach');

// // create a function to prepare pizzas
function preparePizza (size, crust, toppings){
  console.log(`The pizza is on the way!`);
  //create a Pizza object with appropiate key-value pairs
  let pizzaObj  = {
    pizzaSize: 'large',
    pizzaCrust: 'thin',
    pizzaToppings: [  'sausage', ' ham', ' spinach']

  };
   return pizzaObj;
}
 preparePizza(getPizzaOrder());

// //create a serve Pizza function
function servePizza(pizzaObj){
let pizzaServed= `Order up! Here's your ${pizzaObj.pizzaSize} ${pizzaObj.pizzaCrust} crust pizza with ${pizzaObj.pizzaToppings}`;
for (let topping of pizzaToppings){
  pizzaServed+=`${topping}`;
}
console.log(pizzaServed);
return pizzaObj;
  }
  servePizza(preparePizza());

