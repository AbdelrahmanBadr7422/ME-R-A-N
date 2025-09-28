function numericalSequance(start, end, step) {
  var list = [];

  this.step = step;

  for (var i = start; i <= end; i += step) {
    list.push(i);
  }

  this.getList = function () {
    return list;
  };

  this.setValueAtLast = function (value) {
    list.push(value);
  };

  this.setValueAtFirst = function (value) {
    list.unshift(value);
  };

  this.popItem = function () {
    return list.pop();
  };

  this.dequeueItem = function () {
    return list.shift();
  };

  this.getFirstElement = function () {
    return list[0];
  };

  this.getLastElement = function () {
    return list[list.length - 1];
  };
}

numericalSequance.prototype.append = function (value) {
  if (typeof value !== "number") {
    throw new Error("Value must be a number.");
  }

  var last = this.getLastElement();
  if (value === last) {
    throw new Error("Duplicated value not allowed.");
  }

  if (value === last + this.step) {
    this.setValueAtLast(value);
  } else {
    throw new Error(
      "Value must be " + this.step + " more than last value [" + last + "]."
    );
  }
};

numericalSequance.prototype.prepend = function (value) {
  if (typeof value !== "number") {
    throw new Error("Value must be a number.");
  }

  var first = this.getFirstElement();
  if (value === first) {
    throw new Error("Duplicated value not allowed.");
  }

  if (value === first - this.step) {
    this.setValueAtFirst(value);
  } else {
    throw new Error(
      "Value must be " + this.step + " less than first value [" + first + "]."
    );
  }
};

numericalSequance.prototype.pop = function () {
  return this.popItem();
};

numericalSequance.prototype.dequeue = function () {
  return this.dequeueItem();
};

var seq1 = new numericalSequance(4, 10, 2);
console.log(seq1.getList());

seq1.append(12);
console.log(seq1.getList());

seq1.prepend(2);
console.log(seq1.getList());

seq1.dequeue();
console.log(seq1.getList());

seq1.pop();
console.log(seq1.getList());
