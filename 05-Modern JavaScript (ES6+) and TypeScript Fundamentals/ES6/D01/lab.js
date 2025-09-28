// ------ Task 1 --------
const person = { name: "Abdelrahman", age: 23, city: "Alex" };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log("==========================");
// ------ Task 2 --------
const numbers = [10, 20, 30];
for (let num of numbers) {
  console.log(num);
}

console.log("==========================");
// ------ Task 3 --------
const arr = ["A", "B", "C"];

console.log("for...in (get indexes):");
for (let index in arr) {
  console.log(index, arr[index]);
}

console.log("for...of (get values):");
for (let value of arr) {
  console.log(value);
}

// ------ Task 4 --------
console.log("==========================");
const nums = [1, 2, 3];
const copy = [...nums];
console.log(copy);

// ------ Task 5 --------
console.log("==========================");
const student = {
  Std_name: "Abdelrahman",
  fac_name: "Computers & AI",
  Uni_name: "Matrouh University",
  grad: "Good",
};
console.log(
  `${student.Std_name} is a student in faculty of ${student.fac_name} in university ${student.Uni_name} and his final grad is ${student.grad}.`
);

// ------ Task 6 --------
console.log("==========================");
const word = "heloo";
console.log(word.includes("e"));

// ------ Task 7 --------
console.log("==========================");
const user = {
  name: null,
  age: 20,
};

const username = user.name ?? "Default Name";
console.log(username);

// ------ Task 8 --------
console.log("==========================");
const data = {
  user: {
    profile: {
      email: "test@example.com",
    },
  },
};
// console.log(data.user.profile.phone.number); // Regular access (may throw error if missing)
console.log(data.user?.profile?.phone?.number); // Using optional chaining

// ------ Task 9 --------
console.log("==========================");
const car = { brand: "BMW", model: "X5" };
const clonedCar = { ...car, model: "X6" };
console.log(car);
console.log(clonedCar);

// ------ Task 10 --------
console.log("==========================");
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: ["de-gen", "de-or"],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      titles: "JavaScript-Umgebung",
    },
  ],
};
const {
  title,
  translations: [
    {
        locale,
        localization_tags: [
            localization_tag1, 
            localization_tag2
        ],
        last_edit,
        url,
        titles,
    },
  ],
} = metadata;

console.log(title, locale, localization_tag1,localization_tag2, last_edit, url, titles);

// ------ Task 11 -------- object.entries(obj) -> convert this obj to array of keys and values pair
console.log("==========================");
const obj = { name: "Ali", city: "Cairo" };
const entries = Object.entries(obj);
entries.forEach(([key, value]) => {
  console.log(key.toUpperCase(), value);
});

// ------ Task 12 --------
console.log("==========================");
const secret = Symbol("secretKey");
const userData = {
  name: "Sara",
  age: 25,
  [secret]: "privateInfo",
};
console.log(Object.keys(userData));
for (let key in userData) {
  console.log(key);
}

console.log(userData[secret]);
