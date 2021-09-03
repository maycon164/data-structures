//retorna o primeiro numero repetido;

function numeroRepetido (array) {
    let auxiliar = [];
    for(let i = 0; i < array.length; i++){
        if(auxiliar.includes(array[i])) return array[i];
        else auxiliar.push(array[i]);
    }
    return undefined;
}

const primeiroNumeroRepetido = input => {
    const numeros = {};
    
    for(let i = 0; i < input.length; i++){

        if(numeros[input[i]]){
            return input[i];
        } 

        numeros[input[i]] = true;
    }
    
    console.log(numeros)
    return undefined;
}

let a = [2,5,1,2,3,5,1,2,4];
let b = [2,1,1,2,3,5,1,2,4];
let c = [2,3,4,5];

console.log(primeiroNumeroRepetido(b));
