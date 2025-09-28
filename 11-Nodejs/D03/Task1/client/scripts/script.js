
    document.getElementById("loadClientsBtn").addEventListener("click", () => {
      fetch("/server/clients.json")
        .then((res) => res.json())
        .then((data) => {
          const last = data[data.length - 1];

          const tbody = document.getElementById("clientsBody");
          tbody.innerHTML = "";

          data.forEach((client) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
              <td>${client.name}</td>
              <td>${client.mobile}</td>
              <td>${client.email}</td>
              <td>${client.address}</td>
              <td>
                <button onclick="deleteClient('${client.id}')">Delete</button>
                <button onclick="editClient('${client.id}')">Edit</button>
              </td>
            `;
            tbody.appendChild(tr);
          });
        });
    });

    function deleteClient(id) {
      fetch("/server/clients/" + id, {
        method: "DELETE"
      })
        .then(res => res.text())
        .then(msg => {
          alert(msg);
          document.getElementById("loadClientsBtn").click(); // reload
        });
    }

    function editClient(id) {
      const tr = event.target.closest("tr");
      const name = tr.children[0].textContent;
      const mobile = tr.children[1].textContent;
      const email = tr.children[2].textContent;
      const address = tr.children[3].textContent;

      const newName = prompt("Edit Name:", name);
      if (!newName) return;
      const newMobile = prompt("Edit Mobile:", mobile);
      if (!newMobile) return;
      const newEmail = prompt("Edit Email:", email);
      if (!newEmail) return;
      const newAddress = prompt("Edit Address:", address);
      if (!newAddress) return;

      fetch("/server/clients/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          mobile: newMobile,
          email: newEmail,
          address: newAddress,
        }),
      })
        .then((res) => res.text())
        .then((msg) => {
          alert(msg);
          document.getElementById("loadClientsBtn").click(); // إعادة تحميل البيانات
        });
    }