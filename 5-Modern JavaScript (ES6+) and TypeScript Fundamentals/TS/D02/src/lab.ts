interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IEmployee {
  readonly id: number;
  name: string;
  email: string;
  address: IAddress;
}
export class Employee implements IEmployee {
  private static instanceCount: number = 0;

  readonly id: number;
  name: string;
  email: string;
  address: IAddress;
  private username: string;

  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;

    Employee.instanceCount++;
  }

  display(): void {
    console.log("Employee Info:");
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(
      `Address: ${this.address.street}, ${this.address.city}, ${this.address.zipcode}`
    );
    console.log(
      `Geo: lat ${this.address.geo.lat}, lng ${this.address.geo.lng}`
    );
  }

  static getInstanceCount(): number {
    return Employee.instanceCount;
  }
}

export class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress
  ) {
    super(id, name, username, email, address);
  }

  viewEmployeeAddress(): void {
    console.log(`Address: ${this.address.street}, ${this.address.city}`);
  }
}


export function Timestamp<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();

    constructor(...args: any[]) {
      super(...args);
      console.log(`Class ${constructor.name} created at: ${this.createdAt}`);
    }
  };
}
