const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const corsOptions = {
   origin: "*"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({
    status: "SUCCESS",
    message:
      "Welcome to BCGDV simplified checkout API - Running on Node.js, Express, Sequalize, and PostgreSQL",
  });
});

app.use('/', require('./routes/product'));

module.exports = app;