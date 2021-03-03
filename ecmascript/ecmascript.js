"use strict";
// let & const
let maybe = '?';
console.log(maybe);
let isCold = true;
if (isCold) {
    let action = 'Put on Coat';
    console.log(action);
}
var cpf = '123.456.789-01';
// cpf = '789.654.123-10';
console.log(cpf);
function toReveal() {
    var secret = 'internal';
    console.log(secret);
}
for (let i = 0; i < 10; i++) {
    // console.log(i)
}
//Arrow Function 
const add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(2, 2));
const subtract = (n1, n2) => {
    return n1 - n2;
};
console.log(subtract(2, 3));
//# sourceMappingURL=ecmascript.js.map