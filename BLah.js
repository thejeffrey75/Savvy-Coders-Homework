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
  let sizeArray= [size];
  let crustArray=[crust];
  let toppingsArray=[toppings]
  return sizeArray,crustArray, toppingsArray;
}
//Return getPizzaOrder function
(getPizzaOrder('large','thick', 'sausage', 'ham', 'spinach'));
pizzaOrder=getPizzaOrder;
// create a function to prepare pizzas
function preparePizza(size, crust, ...toppings){
//[size]= pizzaArray[0];

    console.log(`The pizza is on the way!`);
 console.log(`This is a test to see if I see: ${size}`)
  //create a Pizza object with appropiate key-value pairs
  let pizza = {
    size: [size],
    crust: [crust],
    toppings:[toppings]
  }
 // console.log(pizza.keys);
}
preparePizza(pizzaOrder);
