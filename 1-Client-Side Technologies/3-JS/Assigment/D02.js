// // Task 1
// var password = "p@$$";
// do{
//     var getPassword = prompt("Enter your password");
// }while(password !== getPassword)



// // Task 2
// var sum = 0;
// for(var i = 2; i < 100;i+=2){
//     sum+=i;
// }
// console.log(sum);



// // Task 3
// function calculate(x, operation, y) {
//     var ans;
//     switch (operation) {
//         case "sum":
//             ans = x + y;
//             break;
//         case "multi":
//             ans = x * y;
//             break;
//         case "subtract":
//             ans = x - y;
//             break;
//         case "division":
//             ans = x / y;
//             break;
//     }
//     console.log(ans);
// }
// var firstNumber = parseInt(prompt("Enter first number"));
// var operation = prompt("Enter operation");
// var secondNumber = parseInt(prompt("Enter second number"));
// calculate(firstNumber, operation, secondNumber);



// Task 4
try {
    userName = prompt("Enter your username");
    password = prompt("Enter your password");
    if(userName === "admin" && password === "421$$"){
        console.log("Welcome login success")

    } else if(userName !== "admin" && password !== "421$$"){
        throw new Error("Invalid username and password");

    } else if(userName !== "admin" && password === "421$$"){
        throw new Error("Invalid userName");
        
    } else if(userName === "admin" && password !== "421$$"){
        throw new Error("Invalid password");

    }

} catch (e){
    console.error(e)
}





// // Task 5
// function guessTheNumber() {
//     var randomNumber = Math.floor(Math.random() * 10);
//     var userNumber = parseInt(prompt("Enter a number between 0 and 9:"));
//     while (userNumber !== randomNumber) {
//         userNumber = parseInt(prompt("Enter a number between 0 and 9:"));
//         console.log(userNumber,randomNumber)
//         if(userNumber === randomNumber){
//             alert("Correct number");
//         }
//     }
// }
// guessTheNumber();




// // Task 6
// function getDate() {
//     var input = prompt("Enter date in the format DD-MM-YYYY(e.g., 22-01-1999):");
//     var date;
//     if(input.length === 10 && input[2]==='-' && input[5]==='-'){
//         console.log(input)
//         var stringArray = input.split('-');
//         for(var i = 0;i < stringArray.length;++i)console.log(stringArray[i]);
//         date = new Date(parseInt(stringArray[0]),parseInt(stringArray[1]),parseInt(stringArray[2]));
//         alert("The date is "+date.toDateString());
//     } else {
//         alert("Wrong Date Format");
//     }
// }
// getDate();



// // Task 7
// function getDayName() {
//     var input = prompt("Enter date in the format DD-MM-YYYY(e.g., 22-01-1999):");
//     var date;
//     if(input.length === 10 && input[2]==='-' && input[5]==='-'){
//         console.log(input)
//         var stringArray = input.split('-');
//         for(var i = 0;i < stringArray.length;++i)console.log(stringArray[i]);
//         date = new Date(parseInt(stringArray[0]),parseInt(stringArray[1]),parseInt(stringArray[2]));
//         var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//         alert("The date is "+days[date.getDay()]);
//     } else {
//         alert("Wrong Date Format");
//     }
// }
// getDayName();




// // Task 8
// function countVowels() {
//     var getString = prompt("Enter string");
//     var a = 0, e = 0, o = 0, u = 0, i = 0;
//     for (var j = 0; j < getString.length; ++j) {
//         switch (getString[j]) {
//             case 'a':
//                 a++;
//                 break;
//             case "e":
//                 e++;
//                 break;
//             case "i":
//                 i++;
//                 break;
//             case "o":
//                 o++;
//                 break;
//             case "u":
//                 u++;
//                 break;
//         }
//     }
//     console.log("a = " + a +" , e = "+e+", o = "+o+" , u = "+u+", i ="+i)
// }
// countVowels()