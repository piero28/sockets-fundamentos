const { io } = require('../server');

io.on('connection', (client) => {
    console.log("usuario conectado");
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app'
    });
    client.on('disconnect', () => {
        console.log("usuario desconectado");
    });
    //Eschuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Enviar datos a todos los clientes
        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario){
        //     callback({
        //         respuesta: 'OK'
        //     });
        // }else{
        //     callback({
        //         respuesta: 'NOK'
        //     });
        // }   

    });
});