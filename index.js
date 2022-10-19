require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const sequelize = require('./db')
const logger = require('morgan');

//API
const checkoutAPI = require("./routes/product/product");

const corsOptions = {
   origin: "*"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'))

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));

app.get("/", (request, response) => {
  response.json({
    status: "SUCCESS",
    message:
      "Welcome to BCGDV simplified checkout API - Running on Node.js, Express, Sequalize, and PostgreSQL",
  });
});

sequelize.sync().catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

app.use("/", checkoutAPI);

module.exports = app;