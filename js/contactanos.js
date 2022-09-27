let buttonContactanos = document.getElementById('buttonImage')
buttonContactanos.addEventListener('click', enviarMensaje)
function enviarMensaje(){
    let divContactanos = document.getElementById('divContactanos')
    let divMensajeContactanos = document.getElementById('divMensajeContactanos')
    divContactanos.style.display = 'none'
    divMensajeContactanos.style.display = ''
}

function guardar(){
    var mensaje = {
        idMensaje: Math.floor(100000 + Math.random() * 900000),
        nombre : document.getElementById('nombreMensaje').value,
        email: document.getElementById('emailMensaje').value,
        contenido: document.getElementById('contenidoMensaje').value
    }
    console.log(mensaje)
    var transaccion = db.transaction("mensaje", "readwrite");
    const objeto = transaccion.objectStore('mensaje');
    const cargarInfo = objeto.add(mensaje);
    console.log("cargar informacion",cargarInfo);
}
