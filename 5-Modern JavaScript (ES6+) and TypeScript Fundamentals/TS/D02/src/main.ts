import { Employee, Manager, Timestamp } from "./lab";
import { MathOperations } from "./mathOperations";

// ========= Task 1 ===============
const emp = new Employee(1, "Leanne Graham", "Bret", "Sincere@april.biz", {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  geo: {
    lat: "-37.3159",
    lng: "81.1496",
  },
});
emp.display();

// ========= Task 2 ===============
const manager = new Manager(2, "John Doe", "manager1", "manager@example.com", {
  street: "Main St",
  suite: "Suite 100",
  city: "Metropolis",
  zipcode: "12345",
  geo: { lat: "0.000", lng: "0.000" },
});
manager.viewEmployeeAddress();

// ========= Task 3 ===============
@Timestamp
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const user1 = new User("Alice");

// ========= Task 4 ===============
const result = MathOperations.add(5, 7);
console.log("Addition Result:", result);