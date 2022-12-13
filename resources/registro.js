const url = "http://localhost:3000/api/MATRICULA/";
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