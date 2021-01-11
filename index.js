
//utilzar las dependencias del modulo cowsay
/* var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Hola Mundo",
	e : "oO",
	T : "U "
})); */


//crear servidor
/* const http = require('http');
const chalk = require('chalk');
const warning = chalk.keyword('orange');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log(warning('Server on port 3000'));
}); */


//leer un archibo

/* const fs = require('fs');
fs.readFile('./text.txt', function (err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString());
}); */



//crear un archivo
/* 
const fs = require('fs');
fs.writeFile('./text.txt', 'linea uno', function (err){
    if (err){
        console.log(err);
    }
    console.log('Archivo creado');
})

console.log('Ultima Linea de Codigo');
 */




//Modulos Sistama Operativo de la Documentacion
/* const os = require('os');



console.log(os.platform());
console.log(os.release());
console.log('free men', os.freemem(), 'bytes');
console.log('Total men', os.totalmem(), 'bytes'); */