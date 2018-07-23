let name = prompt("What is your name?");
let message = ` Ten Onwelle !`
document.getElementById("welcome").innerHTML='Welcome ' + name + message;

let cart = ['A', 'B', 'C'];
// console.table(cart);
// console.log(typeof cart);

const learning = "Learning JavaScript is Great!";
let output;
output = learning.length;
output = learning.indexOf("JavaScript");
output = learning.substr(9,10);
output = learning.split(" ");

output = new Date().toString();

console.log(output);
let msg = document.querySelector("#message");
msg.innerHTML = output;