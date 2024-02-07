const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  password: "",
  database: "vasutak",
  host: "localhost",
});
app.get("/", (req, res) => {
  const q = "select * from utvonalak";
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    }
    res.json(data);
  });
});

app.post("/vonatok", (req, res) => {
  const q = "insert into utvonalak values(?)";
  const values = [
    (id = 0),
    req.body.honnan,
    req.body.hova,
    req.body.tavolsag,
    req.body.sebesseg,
    (atlagseb = req.body.tavolsag / req.body.sebesseg),
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
    }
  });
  res.json("succes");
});

app.delete("/delete/:id", (req, res) => {
  const q = "delete from utvonalak where id=?";

  const id = req.params.id;
  db.query(q, id, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
});

app.delete("/delete", (req, res) => {
  const q = "delete from utvonalak ";

  const id = req.params.id;
  db.query(q, id, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(5500, () => {
  console.log("server connected");
});
