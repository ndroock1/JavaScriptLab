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
let arr1 = new Array(11,12,13,14,15);
let arr2 = arr1.concat(arr);
// Order from lower to greater
arr2.sort(function(num1, num2) {
    return num1 - num2;
    }
);
console.log(arr2);

//Objects
const person = {
    name: 'Juan',
    lastName: 'De la torre',
    job: 'Web Developer',
    email: 'mail@mail.com',
    age : 20,
    favoriteMusic: ['Trance', 'Rock', 'Grunge'],
    living: {
        city: 'Guadalajara',
        country: 'Mexico'
    },
    birthYear: function() {
        return new Date().getFullYear() - this.age;
    }
}
console.log("Geboortejaar = " + person['birthYear']);
console.log("Geboortejaar = " + person['birthYear']());
console.log(person.birthYear());

//Functions
const musicPlayer = {
    play: function(id) {
        console.log(`Playing song with the ID: ${id}`);
    },
    pause: function() {
        console.log('paused....');
    }
}
musicPlayer.play(30);
musicPlayer.pause();
//Immediately-Invoked Function Expression
(function() {
    console.log('IIFES!!');
})();

//Dates
//Dates in JavaScript are objects so you have to create a new date.
const today = new Date();

console.log(today);
// Date MM-DAY-YEAR
let birthday = new Date('17-2-1959');
// Another way
birthday = new Date('17 February 1959');
console.log(birthday);
//console.log(output);
// output = today.getMonth();
// output = today.getDate();
// output = today.getDay();
// output = today.getFullYear();
output = today.getMinutes();
// output = today.getHours();
// output = today.getTime();
// output = today.getFullYear();
// output = today.setFullYear(2018);
console.log(output);



//*******************************************************************************************************************
// DOM Scripting
//*******************************************************************************************************************

let element;
element = document.all;
console.log(element[5]);

console.log(document.querySelector("#div"));
console.log(document.querySelector(".top"));