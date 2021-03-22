const {name,campus} = require('./information.js');


const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `I'm a ${name} i m from ${campus} campus`,
	e : "oO",
	T : "U "
}));