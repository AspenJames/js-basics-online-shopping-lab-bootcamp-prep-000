var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var itemObj = { [item]: price }
  cart.push(itemObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var message = "";
  var keys = [];
  var values = [];
  for(var obj in cart){
    keys.push(Object.keys(cart[obj]));
    values.push(Object.values(cart[obj]));
  }
  if(cart.length > 2){
    for(let i=0;i<cart.length-1;i++){
      message += `${keys[i]} at $${values[i]}, `;
    }
    message += `and ${keys[(cart.length)-1]} at $${values[(cart.length)-1]}.`
    console.log(`In your cart, you have ${message}`)
  }else if(cart.length === 2){
    console.log(`In your cart, you have ${keys[0]} at $${values[0]} and ${keys[1]} at $${values[1]}.`);
  }else if(cart.length === 1){
    console.log(`In your cart, you have ${keys[0]} at $${values[0]}.`)
  }else{
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var prices = [];
  var total = 0
  for(var obj in cart){
    prices.push(Object.values(cart[obj]));
  }
  for(let i=0;i<prices.length;i++){
    total += parseInt(prices[i]);
  }
  return total;
}

function removeFromCart(item) {
  for(let i=0;i<cart.length-1; i++){
    if(cart[i].hasOwnProperty(item)===true){
      delete cart[i];
      return cart;
    }else{
      console.log("That item is not in your cart.");
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
