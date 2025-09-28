"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
const myString = "Hello, TypeScript!";
const myNumber = 42;
const myBoolean = true;
const myArray = [1, 2, 3, 4, 5];
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Array:", myArray);
// // 2a
// const mixedArray: (number | string)[] = [];
// mixedArray.push(10);
// mixedArray.push("TypeScript");
// mixedArray.push(25);
// mixedArray.push("Hello");
// // 2b
// function printArrayElements(arr: (number | string)[]): void {
//   arr.forEach(element => {
//     console.log(`Type: ${typeof element}, Value: ${element}`);
//   });
// }
// printArrayElements(mixedArray);
// enum TrafficLight {
//   Red,
//   Yellow,
//   Green,
// }
// function getAction(light: TrafficLight): string {
//   switch (light) {
//     case TrafficLight.Red:
//       return "Stop";
//     case TrafficLight.Yellow:
//       return "Get Ready";
//     case TrafficLight.Green:
//       return "Go";
//     default:
//       return "Unknown action";
//   }
// }
// console.log(getAction(TrafficLight.Red));    // Stop
// console.log(getAction(TrafficLight.Yellow)); // Get Ready
// console.log(getAction(TrafficLight.Green));  // Go
// enum Role {
//   Admin,
//   User,
//   Guest,
// }
// type UserInfo = [number, string, Role];
// const userInfo: UserInfo = [1, "Alice", Role.Admin];
// function describeUser(user: UserInfo): void {
//   const [id, name, role] = user;
//   let roleName: string;
//   switch (role) {
//     case Role.Admin:
//       roleName = "Admin";
//       break;
//     case Role.User:
//       roleName = "User";
//       break;
//     case Role.Guest:
//       roleName = "Guest";
//       break;
//     default:
//       roleName = "Unknown";
//   }
//   console.log(`User ${name} (ID: ${id}) has role: ${roleName}`);
// }
// describeUser(userInfo);
// function format(input: string): string;
// function format(input: number): string;
// function format(input: string | number): string {
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   } else if (typeof input === "number") {
//     return `$${input.toFixed(2)}`;  // formatted with 2 decimals
//   }
//   return "";  // fallback, shouldn't happen here
// }
// console.log(format("hello"));  // "HELLO"
// console.log(format(123));      // "$123.00"
// let input: unknown = "test input";
// // You can assign different values like:
// // input = 10;
// function processInput(input: unknown): string | number {
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   } else if (typeof input === "number") {
//     return input * input;
//   } else {
//     return "Unsupported type";
//   }
// }
// console.log(processInput(input));
//# sourceMappingURL=lab.js.map