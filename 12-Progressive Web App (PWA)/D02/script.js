let db;

const request = indexedDB.open("todoDB", 1);

request.onupgradeneeded = (e) => {
  db = e.target.result;
  if (!db.objectStoreNames.contains("tasks")) {
    db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
  }
};

request.onsuccess = (e) => {
  db = e.target.result;
  displayTasks();
};

request.onerror = (e) => console.error("IndexedDB error:", e);

function addTask() {
  if (!db) return;
  const title = document.getElementById("taskTitle").value;
  const date = document.getElementById("taskDate").value;
  if (!title || !date) return alert("Enter title and date!");

  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");
  store.add({ title, date, done: false });

  tx.oncomplete = () => {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDate").value = "";
    displayTasks();
  };
}

function displayTasks() {
  if (!db) return;
  const tx = db.transaction("tasks", "readonly");
  const store = tx.objectStore("tasks");
  const req = store.getAll();
  req.onsuccess = () => {
    const list = document.getElementById("tasks");
    list.innerHTML = "";
    req.result.forEach((task) => {
      const div = document.createElement("div");
      div.className = "task" + (task.done ? " done" : "");
      div.innerHTML = `
            ${task.title} - ${new Date(task.date).toLocaleString()}
            <button onclick="markDone(${task.id})">Done</button>
            <button onclick="deleteTask(${task.id})">X</button>
          `;
      list.appendChild(div);
    });
  };
}

function markDone(id) {
  if (!db) return;
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");
  store.get(id).onsuccess = (e) => {
    const task = e.target.result;
    task.done = true;
    store.put(task);
    tx.oncomplete = displayTasks;
  };
}

function deleteTask(id) {
  if (!db) return;
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");
  store.delete(id);
  tx.oncomplete = displayTasks;
}

if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

setInterval(() => {
  if (!db) return;
  const tx = db.transaction("tasks", "readonly");
  const store = tx.objectStore("tasks");
  store.getAll().onsuccess = (e) => {
    e.target.result.forEach((task) => {
      if (!task.done && new Date(task.date) <= new Date()) {
        new Notification("Task Reminder", { body: task.title });
      }
    });
  };
}, 30000);
