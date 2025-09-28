// 1
const myString: string = "Hello, TypeScript!";
const myNumber: number = 42;
const myBoolean: boolean = true;
const myArray: number[] = [1, 2, 3, 4, 5];
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Array:", myArray);

// 2
const mixedArray: (number | string)[] = [];
mixedArray.push(10);
mixedArray.push("TypeScript");
mixedArray.push(25);
mixedArray.push("Hello");

function printArrayElements(arr: (number | string)[]): void {
  arr.forEach(element => {
    console.log(`Type: ${typeof element}, Value: ${element}`);
  });
}
printArrayElements(mixedArray);

// 3 
enum TrafficLight {
  Red,
  Yellow,
  Green,
}

function getAction(light: TrafficLight): string {
  switch (light) {
    case TrafficLight.Red:
      return "Stop";
    case TrafficLight.Yellow:
      return "Get Ready";
    case TrafficLight.Green:
      return "Go";
    default:
      return "Unknown action";
  }
}
console.log(getAction(TrafficLight.Red));
console.log(getAction(TrafficLight.Yellow));
console.log(getAction(TrafficLight.Green));

// 4
enum Role {
  Admin,
  User,
  Guest,
}
type UserInfo = [number, string, Role];
const userInfo: UserInfo = [1, "UserName", Role.Admin];

function describeUser(user: UserInfo): void {
  const [id, name, role] = user;
  let roleName: string;
  switch (role) {
    case Role.Admin:
      roleName = "Admin";
      break;
    case Role.User:
      roleName = "User";
      break;
    case Role.Guest:
      roleName = "Guest";
      break;
    default:
      roleName = "Unknown";
  }
  console.log(`(User: ${name}) | (ID: ${id}) | (role: ${roleName})`);
}

describeUser(userInfo);

// 5
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return `$${input.toFixed(2)}`;
  }
  return "";
}
console.log(format("hello"));
console.log(format(123));

// 6
let input: unknown = "test input";
function processInput(input: unknown): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * input;
  } else {
    return "Unsupported type";
  }
}
console.log(processInput(input));
