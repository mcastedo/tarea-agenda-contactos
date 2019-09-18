var contactos = [
  {
    nombre: "Macarena Poo García",
    empresa: "Retail Zipline",
    email: "macarenapoo@gmail.com",
    telefono: "5556801216"
  },
  {
    nombre: "Juan Fernando Donoso",
    empresa: "Universidad Iberoamericana",
    email: "juan.donoso@uia.mx",
    telefono: "5555555555"
  }
];
function nuevoContacto() {
  document.getElementById("modal").classList.remove("modal");
  document.getElementById("modal").classList.add("modal-open");
}
function cerrarModal() {
  document.getElementById("modal").classList.remove("modal-open");
  document.getElementById("modal").classList.add("modal");
  document.getElementById('nombre').value = '';
  document.getElementById('empresa').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefono').value = '';
}
function agregarContacto() {
  var nom = document.getElementById("nombre");
  var emp = document.getElementById("empresa");
  var mail = document.getElementById("email");
  var tel = document.getElementById("telefono");
  contactos.push({ 'nombre': nom.value, 'empresa': emp.value, 'email': mail.value, 'telefono': tel.value, });
  imprimirTodosLosContactos();
}


function validarContacto() {
  var nombre = document.getElementById("nombre").value;
  var valnom = validarNombre(nombre);
  var correo = document.getElementById("email").value;
  var valmail = validarCorreo(correo);
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Debes de ingresar un nombre");
  var node1 = document.createElement("LI");
  var textnode1 = document.createTextNode("Debes de ingresar un correo");

  if (valnom) {
    errores.innerHTML = "";
  } else {
    node.appendChild(textnode);
    document.getElementById("errores").appendChild(node);
  }

  if (valmail) {
    errores.innerHTML = "";
  } else {
    node1.appendChild(textnode1);
    document.getElementById("errores").appendChild(node1);
  }

  if (valnom && valmail) {
    errores.innerHTML = "";
    agregarContacto();
    cerrarModal();

  }

  function validarNombre(nombre) {
    var n = nombre.length;
    if (n >= 2) {
      return true;
    } else {
      return false;
    }
  }
  function validarCorreo(correo) {
    var m = correo.length;
    if (m >= 2) {
      return true;
    } else {
      return false;
    }
  }
}


function imprimirContacto(contacto, index) {
  var lista = document.getElementById("contactos");
  lista.insertAdjacentHTML('beforeend', `<li class="contacto">
  <div class="actions">
    <a onclick="javascript:borrarContacto(` + index + `)"><i class="fa fa-trash"></i></a>
  </div>
  <i class="userIcon fa fa-user"></i>
  <h4 class="nombre">`+ contacto.nombre + `</h4>
  <div class="datos">
    <div class="dato">
      <i class="fa fa-building"></i>
      <span>`+ contacto.empresa + `</span>
    </div>
    <div class="dato">
      <i class="fa fa-envelope"></i>
      <a href="mailto:`+ contacto.email + `">` + contacto.email + `</a>
    </div>
    <div class="dato">
      <i class="fa fa-phone"></i>
      <a href="tel:`+ contacto.telefono + `">` + contacto.telefono + `</a>
    </div >
  </div >
  </li > `);

}
function borrarContacto(index) {
  contactos.splice(index, 1);
  imprimirTodosLosContactos();
}
function imprimirTodosLosContactos() {
  document.getElementById("contactos").innerHTML = "";
  contactos.forEach(imprimirContacto);
}


imprimirTodosLosContactos();