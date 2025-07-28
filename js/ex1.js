//2
var firstName = "Asif";
var lastName = "Abdullah";
var currentDate = new Date();
document.getElementById("student_message").innerHTML = "Hi, my name is " + firstName + " " + lastName + ". I'm " + ((currentDate - new Date(2002, 7, 22)) / (1000 * 60 * 60 * 24 * 365)).toFixed() + " years old. And I'm learning JavaScript!";

//3
var Num1 = parseInt(document.getElementById("num_1").innerText);
var Num2 = parseInt(document.getElementById("num_2").innerText);
var Result = ((Num1 + Num2) / 2);
document.getElementById("result").innerHTML = "The Average of " + Num1 + " and " + Num2 + " is " + Result.toFixed(2);

//4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

const phone3s = phone3.toString();

if (phone1.length === 9) {
    console.log("Phone 1 is valid");
}
else {
    console.log("Phone 1 is invalid");
}
if (phone2.length === 9) {
    console.log("Phone 2 is valid");
}
else {
    console.log("Phone 2 is invalid");
}
if (phone3s.length === 9) {
    console.log("Phone 3 is valid");
}
else {
    console.log("Phone 3 is invalid");
}

//5
console.log("Result of 32^6 is:", Math.pow(32, 6));

//6
/*
a) var NAME; Valid variable name

b) var $num1;  Valid variable name

c) var typeof;  Cannot use reserved keywords

d) var first-name;  Cannot have hyphen in variable name

e) var attempt_2; Valid variable name

f) var 2ndAttempt; Cannot start with a number

g) var full name; Cannot have space in variable name
*/

//7

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity);  //50
console.log((7 + 5) / number + 2); // 4.0 
console.log(pressure); // undefined
console.log(temperature); // null
console.log(typeof pressure); // undefined
console.log(typeof temperature); // object


//8
document.getElementById("url_2").innerHTML = "https://" + document.getElementById("url_1").innerHTML.trim();
console.log(document.getElementById("url_2").innerHTML);

//9
let myLink = document.getElementById("url_3").innerHTML;
document.getElementById("url_4").innerHTML = myLink.replace("https://", "");
