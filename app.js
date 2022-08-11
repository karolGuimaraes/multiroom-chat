const app = require('./config/server');
const socketIo = require('socket.io');

const server = app.listen(3000, function(){
    console.log('server on')
});

//Websocket escutando na mesma porta que o server
const websocket = socketIo.listen(server);

//Setando a variável global
app.set('websocket', websocket);

websocket.on('connection', function(socket){
    console.log("Websocket ON");

    socket.on('disconnect', function(){
        console.log("Websocket OFF");
    });

    socket.on('mensagem', function(data){
        websocket.emit('canal', {apelido: data.apelido, mensagem: data.mensagem});
    });
});