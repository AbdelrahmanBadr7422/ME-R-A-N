"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Employee = void 0;
exports.Timestamp = Timestamp;
class Employee {
    constructor(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        Employee.instanceCount++;
    }
    display() {
        console.log("Employee Info:");
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.zipcode}`);
        console.log(`Geo: lat ${this.address.geo.lat}, lng ${this.address.geo.lng}`);
    }
    static getInstanceCount() {
        return Employee.instanceCount;
    }
}
exports.Employee = Employee;
Employee.instanceCount = 0;
class Manager extends Employee {
    constructor(id, name, username, email, address) {
        super(id, name, username, email, address);
    }
    viewEmployeeAddress() {
        console.log(`Address: ${this.address.street}, ${this.address.city}`);
    }
}
exports.Manager = Manager;
function Timestamp(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            this.createdAt = new Date();
            console.log(`Class ${constructor.name} created at: ${this.createdAt}`);
        }
    };
}
