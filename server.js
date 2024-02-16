const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// Incoming PORT details
// var corsOptions = {
//   origin: "http://localhost:4200"
// };
let corsOptions = {
  origin: (origin, callback)=>{
      if (['http://localhost:4200'].indexOf(origin) !== -1) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'))
      }
  },credentials: true
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

  
  
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Our Node Server" });
});


// routes vms:
require("./app/routes/vendor.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
