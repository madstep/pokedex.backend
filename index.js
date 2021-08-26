'use strict'
require('dotenv').config()
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT;

var srv = process.env.DB_CONNECTION+'://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+process.env.DB_HOST+'/'+process.env.DB_DATABASE;
console.log(srv);
mongoose.Promise = global.Promise;
mongoose.connect(srv,{useUnifiedTopology: true,useNewUrlParser: true},(err, res) => {
	if(err){
		throw err;
	}else{
		console.log("La conexion a la base de datos esta funcionando correctamente....");
		
		app.listen(port, function(){
			console.log("Servidor del api rest de pokedex escuchando en http://localhost:" + port);
		});	
	}
});