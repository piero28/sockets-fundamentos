const express = require('express');

const socketIO = require('socket.io'); // libreria socket, esta no trabaja directamente con express, por lo cual es necesario importar http

const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app); //Definimos el servidor para correr la app - con la conf de express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Esta es la comunicacion del backend - verificar en http://localhost:3000/socket.io/socket.io.js
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => { //en vez de app.listes es server.listen

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});