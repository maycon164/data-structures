const encontraNumero = valor => {
    let map = new Map();
    let array = valor.toString().split("").map(Number);

    array.forEach(n => {
        if(map.get(n)){
            map.set(n, map.get(n) + 1);
        }else{
            map.set(n, 1);
        }
    });
    
    let numero = 0;
    let qtd = 0;

    for(let key of map.keys()){
        if(map.get(key) > qtd){
            qtd = map.get(key);
            numero = key;
        }
    }

    console.log("NUMERO Q + REPETIU " + numero)
}

encontraNumero(245431234);
