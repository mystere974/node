const myInformation = require('./information.js');


const cowsay = require("cowsay");

console.log(cowsay.say( {
    text: `je suis ${myInformation.name} et je viens de l'école ${myInformation.school}`,
    e: "oO",
    T: "U",
}));

