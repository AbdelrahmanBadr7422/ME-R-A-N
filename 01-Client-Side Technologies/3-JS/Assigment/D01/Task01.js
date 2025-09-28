//-1
var name = "John";
console.log(name);

-2
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);

-3
var city;
console.log(city);
city = "Cairo";
console.log(city);

-4
alert("Welcome");


-5
var deletion = confirm("Are you sure you want to delete this item?");
console.log(deletion);


-6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = confirm(firstName + " " + lastName + ", Is it your full name?");
var birthYear = prompt("Enter your bithdate");
var age = 2025 - birthYear;
document.body.innerHTML += ": Welcome " + fullName + ",  you are " + age + " years old";


-7
var firstNum = parseInt(prompt("Enter first number"));
var secondtNum = parseInt(prompt("Enter second number"));
var sum = firstNum + secondtNum;
console.log( firstNum + ' + ' + secondtNum + ' = ' + sum);


// //-8
var salary;
console.log(typeof salary);


// // -BONUS
var x = 5, y = 10;
console.log("Before swap x = "+x +" & y = "+y);
x = y + x;
y = x - y;
x = x - y;
console.log("After swap x = "+x +" & y = "+y);
