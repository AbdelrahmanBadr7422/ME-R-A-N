function Vehicle(speed, color) {
    if (this.constructor === Vehicle) {
        throw new Error("Cannot instantiate abstract Vehicle directly");
    }

    var _speed, _color;
    if (typeof speed !== "number") throw new TypeError("speed must be a number");
    if (typeof color !== "number") throw new TypeError("color must be a number");
    _speed = speed;
    _color = color;

    Object.defineProperty(this, "speed", {
        get: function () { return _speed; },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(this, "color", {
        get: function () { return _color; },
        enumerable: false,
        configurable: false
    });
}

Vehicle.prototype.turnLeft = function () { console.log("Turning left"); };
Vehicle.prototype.turnRight = function () { console.log("Turning right"); };
Vehicle.prototype.start = function () { return true; };
Vehicle.prototype.stop = function () { return true; };
Vehicle.prototype.goBackward = function (speed, accel) { console.log("Going backward"); };
Vehicle.prototype.goForward = function (speed, accel) { console.log("Going forward"); };

Vehicle.prototype.toString = function () {
    return this.constructor.name + " - Speed: " + this.speed + ", Color: " + this.color;
};
Vehicle.prototype.valueOf = function () {
    return this.speed;
};


function MotorVehicle(speed, color, sizeOfEngine, licencePlate) {
    Vehicle.call(this, speed, color);

    var _sizeOfEngine, _licencePlate;

    if (typeof sizeOfEngine !== "number") throw new TypeError("sizeOfEngine must be a number");
    if (typeof licencePlate !== "string") throw new TypeError("licencePlate must be a string");

    _sizeOfEngine = sizeOfEngine;
    _licencePlate = licencePlate;

    Object.defineProperty(this, "sizeOfEngine", {
        get: function () { return _sizeOfEngine; },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(this, "licencePlate", {
        get: function () { return _licencePlate; },
        enumerable: false,
        configurable: false
    });
}
MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

MotorVehicle.prototype.getSizeOfEngine = function () {
    return this.sizeOfEngine;
};
MotorVehicle.prototype.getLicensePlate = function () {
    return this.licencePlate;
};

function Bicycle(speed, color) {
    Vehicle.call(this, speed, color);
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function () {
    console.log("Ring ring!");
};

function DumpTruck(speed, color, sizeOfEngine, licencePlate, loadCapacity, numWheels, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);

    var _loadCapacity, _numWheels, _weight;

    if (typeof loadCapacity !== "number") throw new TypeError("loadCapacity must be a number");
    if (typeof numWheels !== "number") throw new TypeError("numWheels must be a number");
    if (typeof weight !== "number") throw new TypeError("weight must be a number");

    _loadCapacity = loadCapacity;
    _numWheels = numWheels;
    _weight = weight;

    Object.defineProperty(this, "loadCapacity", {
        get: function () { return _loadCapacity; },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(this, "numWheels", {
        get: function () { return _numWheels; },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(this, "weight", {
        get: function () { return _weight; },
        enumerable: false,
        configurable: false
    });
}
DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

DumpTruck.prototype.lowerLoad = function () { console.log("Lowering load"); };
DumpTruck.prototype.raiseLoad = function () { console.log("Raising load"); };

function Car(speed, color, sizeOfEngine, licencePlate, numOfDoors, numWheels, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);

    var _numOfDoors, _numWheels, _weight;

    if (typeof numOfDoors !== "number") throw new TypeError("numOfDoors must be a number");
    if (typeof numWheels !== "number") throw new TypeError("numWheels must be a number");
    if (typeof weight !== "number") throw new TypeError("weight must be a number");

    _numOfDoors = numOfDoors;
    _numWheels = numWheels;
    _weight = weight;

    Object.defineProperty(this, "numOfDoors", {
        get: function () { return _numOfDoors; },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(this, "numWheels", {
        get: function () { return _numWheels; },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(this, "weight", {
        get: function () { return _weight; },
        enumerable: false,
        configurable: false
    });
}
Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.switchOnAirCon = function () {
    console.log("Air conditioner switched on");
};
Car.prototype.getNumOfDoors = function () {
    return this.numOfDoors;
};

var bike = new Bicycle(15, 1);
console.log(bike.toString());
bike.ringBell();

var car = new Car(120, 5, 2.0, "ABC123", 4, 4, 1500);
console.log(car.toString());
console.log("Car doors:", car.getNumOfDoors());

var truck = new DumpTruck(80, 2, 5.0, "XYZ789", 10000, 8, 8000);
console.log(truck.toString());

console.log("Car speed + Truck speed:", car + truck); 

