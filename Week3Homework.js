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
function getPizzaOrder(size,crust,...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up! `);
  return [size,crust,toppings];
}
//Return getPizzaOrder function
(getPizzaOrder('large','thin', 'sausage', 'ham', 'spinach'));

// // create a function to prepare pizzas
function preparePizza (size, crust, toppings){
  console.log(`The pizza is on the way!`);
  //create a Pizza object with appropiate key-value pairs
  let pizzaObj  = {
    pizzaSize: 'large', 
    pizzaCrust: 'thin',
    pizzaToppings: [  'sausage', ' ham', ' spinach']
  
  };
  // console.log([size]);
  // console.log(pizzaObj.size);
   return pizzaObj;
}
 preparePizza(getPizzaOrder());

// //create a serve Pizza function
function servePizza(pizzaObj){
  // for (let prop in pizzaObj) {
  //   console.log(`pizzaObj.${prop} = ${pizzaObj[prop]}`);

  // }
  
  console.log(`Order up! Here's your ${pizzaObj.pizzaSize} ${pizzaObj.pizzaCrust} crust pizza with ${pizzaObj.pizzaToppings}`);
  
return pizzaObj;
  }
  servePizza(preparePizza());

