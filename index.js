/**
 * Created by umar on 10/6/2016.
 */
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = Number(process.env.PORT || 3000);

/*app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});*/

io.on('connection', function(){ /* … */ });


server.listen(port, function(){
    console.log('server is listening on port 3000');
});
