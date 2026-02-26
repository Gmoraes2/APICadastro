const http = require("http");

const port = 8080;
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      { name: "Gabriel", age: 28, email: "gb@gmail.com" },

      { name: "Ana", age: 25, email: "ana@gmail.com" },
      { name: "João", age: 30, email: "j@gmail.com" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
