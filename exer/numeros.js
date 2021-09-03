const strings = ["Davi", "JEAN"];

//PUSH adiciona ao final da array
strings.push("MAYCON");

//POP remove o ultimo item do array
strings.pop();

//UNSHIFT adiciona ao inicio do array
strings.unshift("Maycon");

//SPLICE remove uma parte e adiciona os itens
strings.splice(1, 1, "FANNY", "GUSION")

let meses = new Array('JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL');
//console.log(meses);
let meses2 = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL'];

///console.log(`MESES = ${typeof meses} | MESES2 = ${typeof meses2}`);
const fib = [0, 1, 1];
for(let n = 3; n <= 20; n++){
    fib[n] = fib[n - 1] + fib[n - 2];
}
//console.log(fib);

Array.prototype.insertFirstElement = function(value){
    for(let i = this.length; i >= 0; i--){
        this[i] = this[i - 1];
    }
    this[0] = value;
}
meses.insertFirstElement("EXEMPLO");
meses.shift();
console.log(meses);

teste = [1, 2, 4, 45, 6, 10];
//console.log(teste.every( t => t > 0));

let pares = teste.filter(n => n % 2 == 0).map(n => n*n);
let quadrado = teste.map(n => n*n);

let existe = pares.some(n => n == 120);

let keys = pares.keys();

for(let k of keys) {
    console.log(k);
}