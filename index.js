const wilder = require('./information');
console.log(`Hi, I am ${wilder.myName} from ${wilder.myCampus}!`);

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, I am ${wilder.myName} from ${wilder.myCampus}!`,
    e : "oO",
    T : "U "
}));



