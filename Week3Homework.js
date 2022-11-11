//declare and creaate array for pizza toppings
let pizzaToppings= ["Sausage","Spinach", "Ham", "Mushrooms"];
//create function to greet customer
function greetCustomer(){
  console.log("Welcome Guest! Here are our toppings:" );
  for(let key in pizzaToppings){
  console.log (pizzaToppings[key] );
}
}
greetCustomer();
//creat a function to create pizza orders
function getPizzaOrder(size,crust,...toppings){
  console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up! `)
  let pizzaArray= [size, crust, ...toppings];
  return pizzaArray, getPizzaOrder;
}
//Return getPizzaOrder function
(getPizzaOrder('large','thick', 'sausage', 'ham', 'spinach'));

// create a function to prepare pizzas
function preparePizza([size,],[crust],[...toppings]){
  console.log(`The pizza is on the way!`);
  //create a Pizza object with appropiate key-value pairs
  let pizza = {
    size: pizzaArray[0],
    crust: pizzaArray[1],
    toppings:pizzaArray[2],
  
  }
  console.log(pizza);
  return pizza, preparePizza;
}
preparePizza(getPizzaOrder);
//create a serve Pizza function
function servePizza(preparePizza){

  console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}`);
  
return pizza, servePizza;
  }
  servePizza(preparePizza);
//   servePizza(preparePizza);
// // preparePizza('large', 'thick', 'sausage', 'ham', 'spinach');
// // servePizza();

