// Stuff
let name = "Nilo de Roock"; // prompt("What is your name?");
let message = ` Ten Onwelle !`
document.getElementById("welcome").innerHTML='Welcome ' + name + message;

let output;
output = new Date().toString();
let msg = document.querySelector("#message");
msg.innerHTML = output;


// Strings
const learning = "Learning JavaScript is Great!";
output = learning.length;
output = learning.indexOf("JavaScript");
output = learning.substr(9,10);
output = learning.split(" ");
console.log(output);

// Arrays
let cart = ['A', 'B', 'C'];
let arr = new Array(1,2,3,4,5);
arr.push(10);
arr.unshift(-123);
arr.splice(4,"",100);
console.log(arr);
arr.pop();
arr.shift();
arr.splice(3,1);
console.log(arr);