var linkedList = {
  data: [],
  enqueue: function (element) {
    if (!element || typeof element.value !== "number") {
      throw new Error("Input must be an object with numeric value");
    }

    var value = element.value;

    if (this.data.indexOf(value) !== -1) {
      throw new Error("Duplicate value not allowed");
    }
    if (this.data.length === 0 || value > this.data[this.data.length - 1]) {
      this.data.push(value);
    } else {
      throw new Error("Value must be greater than the last item");
    }
  },
  
  insert: function (element, index) {
    if (!element || typeof element.value !== "number") {
      throw new Error("Input must be an object with numeric 'value'");
    }
    var value = element.value;
    if (this.data.indexOf(value) !== -1) {
      throw new Error("Value already exists");
    }
    if (index < 0 || index > this.data.length) {
      throw new Error("Invalid index");
    }
    this.data.splice(index, 0, value);
  },

  pop: function () {
    return this.data.pop();
  },

  dequeue: function () {
    return this.data.shift();
  },

  remove: function (value) {
    var index = this.data.indexOf(value);
    if (index === -1) {
      return "data not found";
    }
    this.data.splice(index, 1);
    return "value removed";
  },

  display: function () {
    return this.data.slice();
  },
  
};

linkedList.enqueue({ value: 5 });
linkedList.enqueue({ value: 10 });
linkedList.enqueue({ value: 20 });
console.log(linkedList.display());

linkedList.insert({ value: 15 }, 2);
console.log(linkedList.display());

linkedList.dequeue();
console.log(linkedList.display());

linkedList.pop();
console.log(linkedList.display());

console.log(linkedList.remove(50));
console.log(linkedList.display());

console.log(linkedList.remove(10));
console.log(linkedList.display());

linkedList.enqueue({ value: 16 });
console.log(linkedList.display());