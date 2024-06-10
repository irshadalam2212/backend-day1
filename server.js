// server initiated
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// activated the server on port number 3000
app.listen(3000, () => {
  console.log("server started at port no 3000");
});

// created routes
app.get("/", (req, res) => {
  res.send("Hello ji, kaise ho sare");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully");
});

// mongodb connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection successful"))
  .catch((error) => console.log("Received an error"));
