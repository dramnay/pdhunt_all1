const express = require("express");
require("dotenv").config();
const DBUtils = require("./utils/dbutils");
const userService = require("./service/user_service");
const User = require("./model/user");

const app = express();
const PORT = process.env.PORT || 3000;

// DBUtils.initDB();

app.use(express.json());

app.get("/api/products", (req, res) => {
  console.log("Hello from products");
  res.send("Hello Products GET");
});

app.post("/api/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = new User({ name, email, password });
    // console.log("In POST user " + user);
    await userService.createUser(user);

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log("error in user post ", error);
    res.status(400).send({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
