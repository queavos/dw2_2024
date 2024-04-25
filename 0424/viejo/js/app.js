
var materias=[];
//document.getElementById("texto").innerHTML="<h3>buenas</h3"

/// carga los datos de prueba y actualiza el localStorage
function precargar()
{
  console.log("pre carga");
  materias.push({ carrera: "lasi", curso: 2, semestre: 3, matcode:"sx34",materia:"Log de programación" });
// materias.push({ carrera: "lasi", curso: 2, semestre: 3, matcode:"sx34",materia:"Log de programación" });
 materias.push({
		carrera: "lasi",
		curso: 2,
		semestre: 3,
		matcode: "sx35",
		materia: "Lenguaje de programación 2",
 });
 materias.push({
		carrera: "lasi",
		curso: 2,
		semestre: 3,
		matcode: "sx31",
		materia: "Contabilidad Básica",
 });
 console.log(materias);
 var cadena = JSON.stringify(materias);
console.log(cadena);
localStorage.setItem('materias',cadena);
 //listar();
  }

// CARGAR lee los datos de LOCALSTORAGE en caso de que tenga valores los carga en el array materias
// sino ejecuta la funcion precarga()
function cargar() { 
   console.log("carga"); 
    var valor=localStorage.getItem('materias');
    if (!valor) 
      {
        console.log("sin materias");
        precargar();
      } else 
      {
       materias = JSON.parse(localStorage.getItem("materias"));   
      }
      listar();
  }
  // function guardar() 
  // {

  // }

  //// tomar los valores del formulario
  /// agrega un nuevo elemento al array materias si matid==0
  /// sino busca el el valor de matid en el array materias
  /// y modifica los datos
  //luego persiste los datos

  function agregar() {
     console.log("agregar");
      console.log(materias);
        console.log("estoy agregando");
        let vmatid= document.getElementById("matid").value;
           let vcarrera = document.getElementById("carrera").value;
						let vcurso = document.getElementById("curso").value;
						let vsemestre = document.getElementById("semestre").value;
						let vmatcode = document.getElementById("matcode").value;
						let vmateria = document.getElementById("materia").value;     
        if(vmatid==0){
            materias.push({
					carrera: vcarrera,
					curso: vcurso,
					semestre: vsemestre,
					matcode: vmatcode,
					materia: vmateria,
				});
        } else 
        {
materias.forEach(
    (m) => {
          if (m.matcode==vmatid) {
              console.log(m.materia);
              m.carrera=vcarrera;
							m.curso= vcurso,
					    m.semestre= vsemestre,
					    m.matcode= vmatcode,
					    m.materia= vmateria
          }
        });
        }
        console.log(materias);
				localStorage.setItem("materias", JSON.stringify(materias));
        listar();
        limpiar();
  }
  // setea el form para crear una nueva materia
function limpiar ()
    {
       console.log("limpiar");
       document.getElementById("matid").value = "0";
    document.getElementById("carrera").value = "";
		document.getElementById("curso").value = "";
		document.getElementById("semestre").value = "";
		document.getElementById("matcode").value = "";
		document.getElementById("materia").value = "";
		document.getElementById("feini").value = "";
		document.getElementById("fefin").value = "";        
    }

// dibuja las filas de la tabla    
function listar(){
   console.log("listar");
    //console.log(materias);
    var linea="";
   // materias = JSON.parse(localStorage.getItem("materias"));
    console.log(materias);
    materias.forEach((e) => {
			linea =
				linea +
				"<tr><td>" +
				e.carrera +
				" </td><td> " +
				e.semestre +
				" </td><td> " +
				e.curso +
				"<td>" +
				e.matcode +
				" </td><td> " +
				e.materia +
				" </td> " +
				"<td><a class='btedit' data-id='" +
				e.matcode +
				"' >Editar</a> <td><a class='btborrar ' data-id='" +
				e.matcode +
				"' >Borrar</a></td> </tr>";
		});
    //document.getElementById("lista").innerHTML="";
    //console.log("linea => "+linea);
    document.getElementById("lista").innerHTML = linea;
     addEventos()
    
}
// captura el elemento btedit que disparo el evento
// recupera el atributo data-id del elemento disparador
// busca la materia que tiene el matcode igual al data-id recuperado
// y realiza la carga de los datos en el formulario

function editar(e){
  console.log("ya poes editar");
  //console.log(e);
  var eid=e.target.getAttribute('data-id');
  console.log(e.target.classList);
  //console.log(eid);
 // console.log(materias);
  var m={};
  materias.forEach(
    (m) => {
          if (m.matcode==eid) {
              console.log(m.materia);
                  document.getElementById("carrera").value = m.carrera;
									document.getElementById("curso").value = m.curso;
									document.getElementById("semestre").value = m.semestre;
									document.getElementById("matcode").value = m.matcode;
									document.getElementById("materia").value = m.materia;
                  document.getElementById("matid").value = m.matcode;
          }
        });
}

// activa los eventos para los botones de la tabla, ademas les agrega clases de formato
function addEventos()
{
   console.log("eventos");
var btseditar = document.getElementsByClassName("btedit");
console.log(btseditar);
for (let i=0;i<btseditar.length;i++)
  {
    btseditar[i].addEventListener("click", editar);
    btseditar[i].classList.add("btn");
    btseditar[i].classList.add("btn-info");
  }
 var btsborrar = document.getElementsByClassName("btborrar");
 console.log(btsborrar);
 for (let i = 0; i < btsborrar.length; i++) {
		btsborrar[i].addEventListener("click", borrar)
      btsborrar[i].classList.add("btn");
			btsborrar[i].classList.add("btn-danger");
  } 
}

// captura el elemento btedit que disparo el evento
// recupera el atributo data-id del elemento disparador
// busca la materia que tiene el matcode igual al data-id recuperado
// elimana el elemento del array materia y luego persiste el array 
// en el localstorage
function borrar(e){
  console.log("borrando");
  var eid = e.target.getAttribute("data-id");
	//console.log(eid);
	// console.log(materias);
	var m = {};
	materias.forEach((m,idx) => {
		if (m.matcode == eid) {
			console.log(m.materia+"-"+idx);
      materias.splice(idx,1);
		}
    localStorage.setItem("materias", JSON.stringify(materias));
    listar();
	});

}
document.getElementById("carga").addEventListener("click",cargar); 
document.getElementById("agregar").addEventListener("click", agregar); 
document.getElementById("btnuevo").addEventListener("click", limpiar); 

/// cuando se carga toda la pagina -> cargar
document.addEventListener("DOMContentLoaded", cargar);