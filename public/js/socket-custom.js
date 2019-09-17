var socket = io();
//Escuchar info
socket.on('connect', function(){
    console.log("conectado al servidor")
});
socket.on('disconnect', function(){
    console.log("perdimos conexion con el servidor")
});
//Enviar info 
socket.emit('enviarMensaje', {
    usuario: 'Pierre',
    mensaje: 'Hola Mundo'
}, function(respuesta){
    console.log(respuesta);
});
//Escuchar info
socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
});