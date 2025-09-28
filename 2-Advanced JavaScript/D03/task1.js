function Shape() {
    if (new.target === Shape || this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract Shape directly");
    }
}

function Rectangle(width, height) {
    Shape.call(this);
    if (width <= 0 || height <= 0) {
        throw new Error("Width and height must be positive numbers");
    }

    Object.defineProperty(this, "width", {
        value: width,
        writable: false,
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(this, "height", {
        value: height,
        writable: false,
        enumerable: false,
        configurable: false
    });
}


Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Object.defineProperty(Rectangle.prototype, "area", {
    get: function () {
        return this.width * this.height;
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Rectangle.prototype, "perimeter", {
    get: function () {
        return 2 * (this.width + this.height);
    },
    enumerable: false,
    configurable: false
});

Rectangle.prototype.toString = function () {
    return `Rectangle: ${this.width} x ${this.height}, Area: ${this.area}, Perimeter: ${this.perimeter}`;
};

Rectangle.prototype.valueOf = function () {
    return this.area;
};

function Square(side) {
    Rectangle.call(this, side, side);

    Square.count++;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Object.defineProperty(Square, "count", {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: false
});

Square.prototype.toString = function () {
    return `Square: ${this.width} x ${this.height}, Area: ${this.area}, Perimeter: ${this.perimeter}`;
};


var s1 = new Square(5);
var s2 = new Square(3);
var r1 = new Rectangle(6, 10);
console.log(s1.toString());
console.log(s2.toString());
console.log(r1.toString());

console.log("Square count:", Square.count);
console.log("Area sum:", r1 + s1);
console.log("Area diff:", r1 - s2);
console.log(s1);
console.log(r1);