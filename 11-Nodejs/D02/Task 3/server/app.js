const http = require("http");
const fs = require("fs");
const PORT = 7000;

let mainHtml = "";
fs.readFile("../client/pages/main.html", (err, data) => {
  if (err) console.log(err);
  mainHtml = data.toString();
});

let welcomeHtml = "";
fs.readFile("../client/pages/welcome.html", (err, data) => {
  if (err) console.log(err);
  welcomeHtml = data.toString();
});
let scriptPage = "";
fs.readFile("../client/scripts/script.js", (err, data) => {
  if (err) console.log(err);
  scriptPage = data.toString();
});

let styleCSS = "";
fs.readFile("../client/styles/style.css", (err, data) => {
  if (err) console.log(err);
  styleCSS = data.toString();
});

let clients = [];
fs.readFile("./clients.json", (err, data) => {
  if (err) {
    console.log("Error reading clients.json:", err);
  } else {
    try {
      clients = JSON.parse(data.toString());
    } catch (e) {
      console.log("Error parsing clients.json:", e);
    }
  }
});

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      switch (req.url) {
        case "/":
        case "/main.html":
          res.setHeader("Content-Type", "text/html");
          res.write(mainHtml);
          break;

        case "/welcome.html":
          res.setHeader("Content-Type", "text/html");
          res.write(welcomeHtml);
          break;

        case "/scripts/script.js":
          res.setHeader("Content-Type", "text/css");
          res.write(scriptPage);
          break;

        case "/styles/style.css":
          res.setHeader("Content-Type", "text/css");
          res.write(styleCSS);
          break;

        case "/clients.json":
        case "/server/clients.json":
          res.setHeader("Content-Type", "application/json");
          res.write(JSON.stringify(clients));
          break;

        default:
          res.writeHead(404);
          res.write("Not Found");
          break;
      }
      res.end();
    } else if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("error", (err) => {
        console.log(err);
      });
      req.on("end", () => {
        const params = new URLSearchParams(body.toString());
        if (!params.get("name")) {
          res.end();
        }
        const clientData = {
          name: params.get("name"),
          mobile: params.get("mobile"),
          email: params.get("email"),
          address: params.get("address"),
        };

        clients.push(clientData);

        fs.writeFile(
          "./clients.json",
          JSON.stringify(clients, null, 2),
          (err) => {
            if (err) console.log("Error writing to clients.json:", err);
          }
        );

        welcomeHtml = welcomeHtml
          .replace("{clientName}", clientData.name)
          .replace("{mobile}", clientData.mobile)
          .replace("{email}", clientData.email)
          .replace("{address}", clientData.address);

        res.setHeader("Content-Type", "text/html");
        res.write(welcomeHtml);
        res.end();
      });
    }
  })
  .listen(PORT);
