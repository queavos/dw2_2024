console.log("asdasd");
var materias=[];
//document.getElementById("texto").innerHTML="<h3>buenas</h3"
function cargar() {  
    document.getElementById("carrera").value = "LASI";
    document.getElementById("curso").value = 2;
    document.getElementById("semestre").value = 3;
    document.getElementById("matcode").value = "sx33";
    document.getElementById("materia").value = "DW2";
    document.getElementById("feini").value = "2024-03-03";
    document.getElementById("fefin").value = "2024-07-03";
    //materias.push({ carrera: "ledg", vcurso: 5 });
  }
  function agregar() {
        console.log("estoy agregando");
        let vcarrera = document.getElementById("carrera").value;
        let vcurso = document.getElementById("curso").value;
        let vsemestre = document.getElementById("semestre").value;
        materias.push({carrera:vcarrera,curso:vcurso, semestre:vsemestre});
        listar();
  }
function limpiar ()
    {
    document.getElementById("carrera").value = "";
		document.getElementById("curso").value = "";
		document.getElementById("semestre").value = "";
		document.getElementById("matcode").value = "";
		document.getElementById("materia").value = "";
		document.getElementById("feini").value = "";
		document.getElementById("fefin").value = "";        
    }
function listar(){
    console.log(materias);
    var linea="";
    materias.forEach((e) => {
			 linea =
				linea +
				"<li>" +
				e.carrera +
				" - " +
				e.semestre +
				" - " +
				e.curso +
				"</li>";
		});
    //document.getElementById("lista").innerHTML="";
    console.log("linea => "+linea);
    document.getElementById("lista").innerHTML = linea;

    
}

document.getElementById("carga").addEventListener("click",cargar); 
 document.getElementById("agregar").addEventListener("click", agregar); 
document.getElementById("limpiar").addEventListener("click", limpiar); 