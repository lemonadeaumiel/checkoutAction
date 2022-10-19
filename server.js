require('dotenv').config();
const app = require('./index');
const sequelize = require('./db');
const PORT = process.env.PORT || 8000;

sequelize.sync()
.then(() => {
    console.log("Synced db.");
    app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});
