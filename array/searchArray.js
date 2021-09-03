let numeros = [12, 10, 3, 5, 6, 19, 13];

function multiplo13( item ){
    return item % 13 == 0;
}

let num = numeros.find(multiplo13);
let index = numeros.findIndex(multiplo13)

console.log(num, " - ", index)