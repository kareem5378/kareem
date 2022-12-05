const express = require("express");
const app = express();
const cors = require("cors");
const sql = require("mssql/msnodesqlv8");
const DBconf = require("../backend/db");
const conn = new sql.ConnectionPool(DBconf);
const bodyParser = require("body-parser");

const corsConf = {
  origin: "*",
  optionSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsConf));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/home", require("./routes/api/home"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log("Server status: ON.. Running on port 5000");
});

