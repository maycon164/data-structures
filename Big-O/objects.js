//Reference type
let a = [];
let b = a;

a.push("Maycon");
b.push("Davi");

let c = b.map(item => item.toUpperCase() + "!");

//CONTEX VS SCOPE

console.log(this);

function teste(){
    teste3();
}
function teste3(){
    console.log(this);
}
let teste2 = () => {
    console.log(this);
}
// INSTANCIAS
class Player {
    constructor(nome, tipo){
        console.log("Player ", this)
        this.nome = nome;
        this.tipo = tipo;

    }
    apresentar(){
        console.log(`Olá eu sou ${this.nome}, do tipo ${this.tipo}`);
    }
}

class Mago extends Player{
    constructor(nome, tipo){
        
        super(nome, tipo);
        console.log(`Mago,`, (this));
    }

    magia(){
        console.log(`Sou o mago ${this.nome}`);
    }
}

let mago = new Mago("Maycon", "Bruxo");
mago.apresentar();