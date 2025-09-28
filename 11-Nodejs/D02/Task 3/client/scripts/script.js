  document.getElementById("loadClientsBtn").addEventListener("click", () => {
  fetch("../../server/clients.json")
    .then((response) => response.json())
    .then((data) => {
      const clientList = document.getElementById("clientsList");
      clientList.innerHTML = "";

      if (typeof data === "string") {
        data = [JSON.parse(data)];
      } else if (Array.isArray(data)) {
        data = data.map((client) => {
          return typeof client === "string" ? JSON.parse(client) : client;
        });
      }

      data.forEach((client) => {
        const li = document.createElement("li");
        li.textContent = `Name: ${client.name}, Mobile: ${client.mobile}, Email: ${client.email}, Address: ${client.address}`;
        clientList.appendChild(li);
      });
    });
});
