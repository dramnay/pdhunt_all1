const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/products", (req, res) => {
  console.log("Hello from products");
  res.send("Hello Products GET");
});

app.post("/api/user", (req, res) => {
  const body = req.body;
  console.log(body);
  console.log("Hello from user");
  res.send("Hello from user POST");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
