var facultades = new Facultades();
var carreras = new Carreras();
function nuevoForm() {
	document.getElementById("carre_id").value = -1;
	document.getElementById("facu_id").value = "";
	document.getElementById("carre_nombre").value = "";
	document.getElementById("carre_sigla").value = "";
}
function editarForm(e) {
	let eid = e.target.getAttribute("data-id");
	let idx = carreras.getIndexById(eid);
	console.log(idx);
	document.getElementById("carre_id").value = carreras.datos[idx].carre_id;
	document.getElementById("carre_nombre").value =
		carreras.datos[idx].carre_nombre;
	document.getElementById("facu_id").value = carreras.datos[idx].facu_id;
	document.getElementById("carre_sigla").value =
		carreras.datos[idx].carre_sigla;
}
function borrarForm(e) {
	let eid = e.target.getAttribute("data-id");
	let idx = carreras.getIndexById(eid);
	carreras.borrar(idx);
	dibujarTabla();
}
function guardarForm() {
	let carrera = new Carrera();
	carrera.carre_id = document.getElementById("carre_id").value;
	carrera.carre_nombre = document.getElementById("carre_nombre").value;
	carrera.facu_id = document.getElementById("facu_id").value;
	carrera.carre_sigla = document.getElementById("carre_sigla").value;
	if (carrera.carre_id == -1) {
		carreras.agregar(carrera);
	} else {
		carreras.actualizar(carrera);
	}
	dibujarTabla();
}
function cancelarForm() {
	document.getElementById("carre_id").value = "";
	document.getElementById("carre_nombre").value = "";
	document.getElementById("carre_sigla").value = "";
	document.getElementById("facu_id").value = "";
}
function dibujarTabla() {
	let lineas = "";
	let thead =
		"<table class='table'><thead><tr><th>Facultad</th><th>Nombre</th><th>Siglas</th><th colspan='2'><a id='btnuevo'  class='btn btn-primary'>Nuevo</a></th></tr> </thead>";
	let tbody = "<tbody>";
	let tfoot = "</tbody></table>";
	carreras.datos.forEach((f) => {
		lineas =
			lineas +
			"<tr><td>" +
			facultades.getNameById(f.facu_id) +
			"</td><td>" +
			f.carre_nombre +
			"</td><td>" +
			f.carre_sigla +
			" </td> <td><a class='bteditar' data-id='" +
			f.carre_id +
			"'>Editar</a>" +
			"<td><a class='btborrar' data-id='" +
			f.carre_id +
			"'>Borrar</a></td></tr>";
	});
	document.getElementById("tabla").innerHTML = thead + tbody + lineas + tfoot;
	asignarEventos();
	cancelarForm();
}
function asignarEventos() {
	document.getElementById("btnuevo").classList.add("btn");
	document.getElementById("btnuevo").classList.add("btn-info");
	document.getElementById("btnuevo").addEventListener("click", nuevoForm);
	var btseditar = document.getElementsByClassName("bteditar");
	console.log(btseditar);
	for (let i = 0; i < btseditar.length; i++) {
		btseditar[i].addEventListener("click", editarForm);
		btseditar[i].classList.add("btn");
		btseditar[i].classList.add("btn-warning");
	}
	var btsborrar = document.getElementsByClassName("btborrar");
	console.log(btsborrar);
	for (let i = 0; i < btsborrar.length; i++) {
		btsborrar[i].addEventListener("click", borrarForm);
		btsborrar[i].classList.add("btn");
		btsborrar[i].classList.add("btn-danger");
	}
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
document.addEventListener("DOMContentLoaded", cargar);
