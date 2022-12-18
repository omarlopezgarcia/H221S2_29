
var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "db_landing_page",
});

conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
});


const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});


app.post("/api/MATRICULA", (req, res) => {
	let data = {
    	NOMMAT: req.body.NOMMAT,
    	EMAMAT: req.body.EMAMAT,
		CELMAT: req.body.CELMAT,
    	ASUMAT: req.body.ASUMAT,
    	DESCMAT: req.body.DESCMAT,
	};
	let sql = "INSERT INTO MATRICULA SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
});

