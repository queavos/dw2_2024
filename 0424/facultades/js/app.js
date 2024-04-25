var facultades= new Facultades();
function nuevoForm(){
    document.getElementById("facu_id").value=-1;
    document.getElementById("facu_nombre").value = "";
    document.getElementById("facu_sigla").value = "";
}
function editarForm(e) {
    let eid=e.target.getAttribute('data-id');
    let idx=facultades.getIndexById(eid);
    console.log(idx);
    document.getElementById("facu_id").value = facultades.datos[idx].facu_id;
	document.getElementById("facu_nombre").value =
		facultades.datos[idx].facu_nombre;
	document.getElementById("facu_sigla").value =
		facultades.datos[idx].facu_sigla;

}
function borrarForm(e) {
        let eid = e.target.getAttribute("data-id");
		let idx = facultades.getIndexById(eid);
        facultades.borrar(idx);
        dibujarTabla();
}
function guardarForm() {
    let facultad= new Facultad();
    facultad.facu_id = document.getElementById("facu_id").value;
    facultad.facu_nombre = document.getElementById("facu_nombre").value;
    facultad.facu_sigla = document.getElementById("facu_sigla").value;
    if ( facultad.facu_id==-1){
        
        facultades.agregar(facultad);
    } else{
        facultades.actualizar(facultad);
    }
    dibujarTabla();
}
function cancelarForm() {
 
			document.getElementById("facu_id").value = "";
			document.getElementById("facu_nombre").value = "";
			document.getElementById("facu_sigla").value = "";
		
}
function dibujarTabla() {
    let lineas="";
    let thead="<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Siglas</th><th colspan='2'><a id='btnuevo'  class='btn btn-primary'>Nuevo</a></th></tr> </thead>";
    let tbody="<tbody>"
    let tfoot="</tbody></table>"
    facultades.datos.forEach(f => {
        lineas =
					lineas +
					"<tr><td>" +
					f.facu_id +
					"</td><td>" +
					f.facu_nombre +
					"</td><td>" +
					f.facu_sigla +
					" </td> <td><a class='bteditar' data-id='" +
					f.facu_id +
					"'>Editar</a>" +
					"<td><a class='btborrar' data-id='" +
					f.facu_id +
					"'>Borrar</a></td></tr>";
        
    });
    document.getElementById("tabla").innerHTML=thead+tbody+lineas+tfoot;
    asignarEventos();
    cancelarForm();

}
function asignarEventos() {
  document.getElementById('btnuevo').classList.add('btn')
  document.getElementById('btnuevo').classList.add('btn-info')
  document.getElementById("btnuevo").addEventListener("click", nuevoForm);
  var btseditar = document.getElementsByClassName('bteditar')
  console.log(btseditar)
  for (let i = 0; i < btseditar.length; i++) {
    btseditar[i].addEventListener("click", editarForm);
    btseditar[i].classList.add('btn')
    btseditar[i].classList.add('btn-warning')
  }
  var btsborrar = document.getElementsByClassName('btborrar')
  console.log(btsborrar)
  for (let i = 0; i < btsborrar.length; i++) {
    btsborrar[i].addEventListener("click", borrarForm);
    btsborrar[i].classList.add('btn')
    btsborrar[i].classList.add('btn-danger')}

}
function cargar() {
    dibujarTabla(); 
    asignarEventos();
    document.getElementById("btcancel").classList.add("btn");
	document.getElementById("btcancel").classList.add("btn-secondary");
	document.getElementById("btcancel").addEventListener("click", cancelarForm);
	document.getElementById("btguardar").classList.add("btn");
	document.getElementById("btguardar").classList.add("btn-primary");
	document.getElementById("btguardar").addEventListener("click", guardarForm);
}
document.addEventListener('DOMContentLoaded',cargar);

