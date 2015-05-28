//variable del recurso http
var http = require("http");

http.createServer(function(request,respuesta){
    /*De la instancia de http, sale createServer con el cual
    podemos hacer el servidor.
    los parametros usados son:
    request --> es lo que pide el server, debe ir en este orden
    para que funcione.
    respuesta-->Lo que se va a mostrar
    */

    //del parametro respuesta se crea lo que se va a mostrar

    respuesta.writeHeader(200,{"Content-Type":"text/plain"});
    respuesta.write("Hola Johan, este es el server de Node a tu servicio.");
    respuesta.end();
}).listen(3000,"localhost");

/*
listen(), se usa para darle los parametros al server, para que se sepa
por sonde va a recibir las peticiones
parametro1-->puerto
parametro2-->ip o direccion en este caso el local
*/

console.log("El server node va por http://localhost:3000");
