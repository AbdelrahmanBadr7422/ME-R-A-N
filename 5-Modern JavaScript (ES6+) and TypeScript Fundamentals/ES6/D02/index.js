// ------ Task 1 --------
let students = new Set();
students.add("first");
students.add("second");
students.add("first");
console.log("Using spread:", [...students]);
for (let s of students) {
  // Using for...of
  console.log(s);
}

// ------- Task 2 --------
let studentGrades = new Map();
studentGrades.set("Ali", {
  Grades: [
    { CourseName: "JavaScript", Grade: "Excellent" },
    { CourseName: "Jquery", Grade: "Good" },
    { CourseName: "CSS", Grade: "V.Good" },
  ],
});
studentGrades.set("Ahmed", {
  Grades: [
    { CourseName: "JavaScript", Grade: "Good" },
    { CourseName: "HTML", Grade: "Excellent" },
  ],
});

for (let [name, data] of studentGrades) {
  console.log(`Student: ${name}`);
  data.Grades.forEach((g) => {
    console.log(`- ${g.CourseName}: ${g.Grade}`);
  });
}

// ------ Task 3 ---------
let arr = [1, 5, 3, 4, 2, 4, 6, 8, 5];
let oddNumbers = arr.filter((num) => num % 2 !== 0); // Array.filter()
console.log("Odd Numbers:", oddNumbers);

arr.forEach((num) => { // array.forech()
  if (num % 2 === 0) {
    console.log("Even:", num);
  }
});

let firstGreater5 = arr.find((num) => num > 5); // First number > 5
console.log("first number > 5 is ", firstGreater5);

let doubled = arr.map((num) => num * 2); // Double array
console.log("Doubled Array ", doubled);

// ------ Task 4 ---------
function* tipsGenerator() {
  let tips = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  let index = 0;
  while (true) {
    yield tips[index % tips.length];
    index++;
  }
}
let tipsGen = tipsGenerator();
document.getElementById("showAll").addEventListener("click", () => {
  console.log("All Tips (for...of loop, break after 10):");
  let counter = 0;
  const div = document.createElement("div");
  for (let tip of tipsGen) { // looping to show all tips
    div.textContent += tip + "\n";
    counter++;
    if (counter === 10) break;
  }
  tipsContainerAllTips.appendChild(div);
});
//=========
let tipsGen2 = tipsGenerator(); // show only on tip per click
document.getElementById("nextTipBtn").addEventListener("click", () => {
  const next = tipsGen2.next();
  if (!next.done) {
    const div = document.createElement("div");
    div.textContent = next.value;
    tipsContainerOneByOne.appendChild(div);
  }
});
// Timer Showing
const tipsContainer = document.getElementById("tipsContainerTimer");
document.getElementById("nextTipWithIntervalBtn").addEventListener("click", () => {
    let tipsGen = tipsGenerator();
    let interval = setInterval(() => {
      let next = tipsGen.next();
      if (!next.done) {
        const div = document.createElement("div");
        div.textContent = next.value;
        tipsContainer.appendChild(div);
      } else {
        clearInterval(interval);
        alert("All tips are shown");
      }
    }, 3000);
  });

// ------ Task 5 ---------
((a, b) => alert(`Sum is: ${a + b}`))(5, 7);

// ------ Task 6 ---------
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("123456"));

// ------ Task 7 ---------
function courseInfo({
  courseName = "ES6",
  courseDuration = "3days",
  courseOwner = "JavaScript",
  ...rest
} = {}) {
  if (Object.keys(rest).length > 0) {
    throw new Error("Invalid property passed!");
  }
  console.log(
    `Course: ${courseName}, Duration: ${courseDuration}, Owner: ${courseOwner}`
  );
}

courseInfo({ courseName: "React", courseDuration: "5days" });
// courseInfo({newArgs:"new value"}); // ERROR

// ------ Task 8 ---------
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(
  "All strings == ",
  fruits.every((item) => typeof item === "string")
);

console.log(
  "Some start with a == ",
  fruits.some((item) => item.startsWith("a"))
);

let filtered = fruits.filter((item) => item.startsWith("b") || item.startsWith("s"));
console.log("Filtered == ", filtered);

filtered.forEach((item) => console.log("Filtered Fruit == ", item));