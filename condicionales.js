'use strict'
//condicionales

// if
// Si A es igual o diferente a B entonces has algo.

/*var edad1= 10;
var edad2= 12;

if (edad1>edad2) {
	console.log("Edad 1 es mayor a Edad 2");
}else{
console.log ("Edad 1 es inferior");
}*/

var edad = 40;
var nombre = 'David Suarez';

/*
//operadores relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

if(edad >= 18){
	console.log(nombre+" tiene "+edad+" años, es mayor de edad");
	if (edad <= 33) {
		console.log('Todavia eres millenial');
	}else if(edad >= 65){
		console.log('Eres ansiano');
	}else{
		console.log("Ya no eres millenial");
	}
}else{
	console.log(nombre+" tiene "+edad+" años, es menor de edad");

}

/*
// Operadores logicos

AND(Y):&&
OR(O):||
Negación:!
*/


var year = 2029;
//Negación
if (year != 2016) {
	console.log("El año no es 2016, realmente es "+year);

} 

//AND
if(year >= 2000 && year <= 2020 && year != 2018){
 	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era Post moderna");
}

//OR
if (year == 2009 || (year >= 2019 && year == 2029)) {
	console.log("El año acaba en 9");
}else{
	console.log("Año no registrado");
}