import {
  Employee,
  Manager,
  WorkerBee,
  SalesPerson,
  Engineer,
} from "./classes.js";

const emp = new Employee("Ali");
const mgr = new Manager("Sara", "management", [emp]);
const worker = new WorkerBee("Omar", "general", ["Project A"]);
const sales = new SalesPerson("Mona", ["Sales Campaign"], 200);
const engineer = new Engineer("Hassan", ["AI Project"], "3D Printer");

console.log(emp);
console.log(mgr);
console.log(worker);
console.log(sales);
console.log(engineer);

async function getUsersWithPosts() {
  try {
    const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersRes.json();

    const container = document.getElementById("data");

    for (const user of users) {
      const userLi = document.createElement("li");
      userLi.textContent = `${user.name}`;

      const postsUl = document.createElement("ul");

      const postsRes = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
      const posts = await postsRes.json();

      posts.forEach(post => {
        const postLi = document.createElement("li");
        postLi.textContent = post.title;
        postsUl.appendChild(postLi);
      });

      userLi.appendChild(postsUl);
      container.appendChild(userLi);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getUsersWithPosts()