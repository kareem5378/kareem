const express = require("express");
const router = express.Router();
const DBconf = require("../../db");
const sql = require("mssql/msnodesqlv8");
const conn = new sql.ConnectionPool(DBconf);

router.post("/addUser", (req, response) => {
  console.log("Backend");
  const name = req.body.fullName;
  const email = req.body.Email;
  const password = req.body.Password;
  console.log(name, email, password);

  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `INSERT INTO Users VALUES ('${name}', '${email}', '${password}')`,
          (err, res) => {
            response.status(200).json();
          }
        );
    }
  });
});

router.post("/getUser", (req, response) => {
  console.log("Backend");
  const email = req.body.Email;
  const password = req.body.Password;

  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `SELECT * from Users where ( Email = '${email}' & Password = '${password}')`,
          (err, res) => {
            response.status(200).json();
          }
        );
    }
  });
});

module.exports = router;
