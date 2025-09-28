const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/" || "/index", (_, res) => {
  res.sendFile(path.join(__dirname, "../client/pages/main.html"));
});

app.post("/welcome.html", (req, res) => {
  const formData = req.body;
  formData.id = new Date();
  fs.readFile("./clients.json", (err, data) => {
    let existingData = [];
    if (!err) {
      try {
        existingData = JSON.parse(data);
      } catch (parseError) {
        console.error("Error parsing existing JSON data:", parseError);
      }
    }

    existingData.push(formData);

    fs.writeFile(
      "./clients.json",
      JSON.stringify(existingData, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing to JSON file:", writeErr);
          res.status(500).send("Error saving data");
        } else {
          res.send("Data saved successfully!");
        }
      }
    );
  });
  
  fs.readFile("../client/pages/welcome.html", "utf-8", (err, htmlData) => {
    if (err) {
      console.error("Error reading template:", err);
      return res.status(500).send("Error loading page");
    }
    let finalPage = htmlData
      .replace("{clientName}", formData.name)
      .replace("{mobile}", formData.mobile)
      .replace("{email}", formData.email)
      .replace("{address}", formData.address);

    res.send(finalPage);
  });
});

app.delete("/server/clients/:id", (req, res) => {
  const clientId = req.params.id;

  fs.readFile("./clients.json", (err, data) => {
    if (err) return res.status(500).send("Error reading clients data.");

    let clients;
    try {
      clients = JSON.parse(data);
    } catch {
      return res.status(500).send("Error parsing clients data.");
    }

    const filteredClients = clients.filter((client) => client.id !== clientId);

    fs.writeFile(
      "./clients.json",
      JSON.stringify(filteredClients, null, 2),
      (writeErr) => {
        if (writeErr) return res.status(500).send("Error saving clients data.");
        res.send("Client deleted successfully.");
      }
    );
  });
});

app.put("/server/clients/:id", (req, res) => {
  const clientId = req.params.id;
  const updatedData = req.body;
  fs.readFile("./clients.json", (err, data) => {
    if (err) return res.status(500).send("Error reading clients data.");
    let clients;
    try {
      clients = JSON.parse(data);
    } catch {
      return res.status(500).send("Error parsing clients data.");
    }
    const clientIndex = clients.findIndex((client) => client.id === clientId);
    if (clientIndex === -1) return res.status(404).send("Client not found.");

    clients[clientIndex] = {
      ...clients[clientIndex],
      ...updatedData,
      id: clientId,
    };
    fs.writeFile("./clients.json", JSON.stringify(clients, null, 2), (writeErr) => {
      if (writeErr) return res.status(500).send("Error saving updated data.");
      res.send("Client updated successfully.");
    });
  });
});


app.get("/styles/style.css", (_, res) => {
  res.sendFile(path.join(__dirname, "../client/styles/style.css"));
});

app.get("/scripts/script.js", (_, res) => {
  res.sendFile(path.join(__dirname, "../client/scripts/script.js"));
});

app.get("/server/clients.json", (_, res) => {
  res.sendFile(path.join(__dirname, "./clients.json"));
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
