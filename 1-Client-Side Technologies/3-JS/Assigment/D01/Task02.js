//Task 1
var x = parseInt(prompt("Enter a number"));
if(x == 0){
    console.log("Zero");
} else if (x % 2 != 0){
    console.log("Odd");
} else {
    console.log("Even");
}


//Task 2
var x = confirm("Do you want to proceed?");
if(x == true){
    alert("You chose to proceed");
} else {
    alert("Action canceled");
}


//Task 3
var num = 10;
console.log(num % 2  === 0 ? "hi" : "heloo");


//Task 4
do{

    var age= parseInt(prompt("Enter your age"));
    while(age < 1 ){
        age = parseInt(prompt("Enter your age"));
    }
    if(age < 10 ){
        console.log("Child");
    } else if (age < 19){
        console.log("Teenager");    
    } else if (age < 51) {
        console.log("Grown up");    
    } else {
        console.log("Old");    
    }
} while (confirm("Do you want ask to another date ?"))


//task 5
var time = prompt("enter 24 based time");
while(!(time < 24 && time >= 0 )){
    time = parseInt(prompt("Enter your age"));
}
if(time == 0){
    time = 12;
}
else if(time > 12){
    time = time - 12;
}
console.log(time);
 
//Task6
var str = prompt("enter a word");
console.log(str.charAt(0).toUpperCase() + str.slice(1));


// Task7
var color = prompt("Enter your favorite color");
var valid = confirm("You chose ["+color+". Is that correct?");
if(valid){
    console.log("Great choice!");
}else {
    console.log("Let's try again.");
}


//Task8
var date1 = new Date('2002-4-7');
var date2 = new Date('2025-7-22');
 if (date1 < date2) {
    console.log('date1 is earlier than date2');
} else {
    console.log('date1 is not earlier than date2');
}

//Task9
var date1 = new Date('2001-7-1');
var date2 = new Date('2025-7-22');
var miliseconds = Math.abs(date2.getTime()-date1.getTime());
var oneDay = 1000 * 60 * 60 * 24;
console.log(miliseconds/oneDay);

//Task10
var str = "Hello World!";
console.log(str.substring(6,11));

//Task11
var num = 5.678;
num=num.toFixed(2);
console.log(num);

//Task12 
var num = prompt("Enter number divisable by 3 & 5")
console.log((num % 3 == 0 && num % 5 == 0) ? "True" : "False");