const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./app/models");
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, `/.env`),
});

var corsOptions = {
  origin: "http://127.0.0.1:5173",
};

const port = process.env.PORT || 3000;
mongoose.set("strictQuery", false);

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/products.routes")(app);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
