console.log("asdasd");

//document.getElementById("texto").innerHTML="<h3>buenas</h3"

function cargar() {  
    document.getElementById("carrera").value = "LASI";
    document.getElementById("carrera").value = "LASI";
    document.getElementById("curso").value = 2;
    document.getElementById("semestre").value = 3;
    document.getElementById("matcode").value = "sx33";
    document.getElementById("materia").value = "DW2";
    document.getElementById("feini").value = "2024-03-03";
    document.getElementById("fefin").value = "2024-07-03";

  }
  function agregar() {
        console.log("estoy agregando");
  }

 document.getElementById("carga").addEventListener("click",cargar); 
 document.getElementById("agregar").addEventListener("click", agregar); 