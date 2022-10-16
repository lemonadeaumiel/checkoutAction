const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const sequelize = require('./db')

const corsOptions = {
   origin: "*"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));

app.get("/", (request, response) => {
  response.json({
    status: "SUCCESS",
    message:
      "Welcome to BCGDV simplified checkout API - Running on Node.js, Express, Sequalize, and PostgreSQL",
  });
});

sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
