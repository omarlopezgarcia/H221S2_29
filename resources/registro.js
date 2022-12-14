const url = "http://50.16.137.250:3000/api/MATRICULA/";
let resultados = '';
const formArticulo = document.querySelector("form");
const NOMMAT = document.getElementById("NOMMAT");
const EMAMAT = document.getElementById("EMAMAT");
const CELMAT = document.getElementById("CELMAT");
const ASUMAT = document.getElementById("ASUMAT");
const DESCMAT = document.getElementById("DESCMAT");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (NOMMAT.value == "" || EMAMAT.value == "" || CELMAT.value == "" || ASUMAT.value == "" || DESCMAT.value == "") {
       		 alert("Asegúrese de que todos los campos estén completos");
       		 return false;
   		 } else {
       		 console.log("Todos los campos están completos");
       		 fetch(
           		 url,
           		 {
               		 method: 'POST',
               		 headers: {
                   		 'content-Type':'application/json'
               		 },
               		 body: JSON.stringify(
                   		 {
                       		 NOMMAT: NOMMAT.value,
                       		 EMAMAT: EMAMAT.value,
							 CELMAT: CELMAT.value,
                       		 ASUMAT: ASUMAT.value,
                       		 DESCMAT: DESCMAT.value,
                   		 }
               		 )
           		 }
       		 )
       		 .then(
           		 response => response.json()
       		 )
       		 .then(
           		 response => location.reload()
       		 );
   		 }
   	 } else if(opcion == 'editar'){
   		 console.log("Activado el ");
   	 }
    }
);


var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "landing_page",
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

