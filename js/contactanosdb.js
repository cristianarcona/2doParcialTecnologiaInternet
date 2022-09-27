const dbConnection = window.indexedDB.open('contactanos', 2);                                   // version 1
let db;
//on success = El successevent se dispara cuando un IDBRequesttiene éxito.
dbConnection.onsuccess = () => {
    db = dbConnection.result;
    console.log("Base de datos abierta", db);
}
// El upgradeneededevento se activa cuando se intentó abrir una base de datos 
// con un número de versión superior a su versión actual.
dbConnection.onupgradeneeded = (e) => {
    db = e.target.result;//elemento que nos devuelve
    console.log("Crear objetos de DB", db);
    const coleccionObjetos = db.createObjectStore('mensaje', {
        keyPath: 'idMensaje'
    });
    coleccionObjetos.createIndex("idMensaje", "idMensaje", { unique: false });
    coleccionObjetos.createIndex("nombre", "nombre", { unique: false });
    coleccionObjetos.createIndex("email", "email", { unique: false });
    coleccionObjetos.createIndex("contenido", "contenido", { unique: false });

}
// El errorevento se activa IDBTransactioncuando una solicitud devuelve un error 
// y el evento aparece en el objeto de la transacción.
dbConnection.onerror = (error) =>{
    console.log(error);
}