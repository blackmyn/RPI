const express = require("express");
const cors = require("cors");
const { json } = require("sequelize");

const app = express();

var corsOptions = {
  origin: "https://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.get("/", (req,res)=> {
  res.json({message: "Server is running!"});
});


require("./routes/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
  console.log(`Server is running on port: ${PORT}`);
});