const express = require("express");
// const ejs = require("ejs");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index.ejs", { users });
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    // Aqui você pode acessar os dados enviados no corpo da requisição
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
  } catch (error) {
    return res.status(500).json({ message: "id nao encontrado" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "id nao encontrado" });
  }
});

const porta = 8080;
app.listen(porta, () =>
  console.log(`Servidor rodando com Express na porta ${porta}`),
);
// cons server = http.createServer((req, res) => {});
