//DADO 2 ARRAYS retorne TRUE/FALSE se tiverem itens iguais ;

let a = ['A', 'B', 'C'];
let b = ['Z', 'X', 'T'];
let c = ['A', 'N', 'A'];

let comparator = (a, b) => {
    if(a == null || b == null || a == undefined || b == undefined) return false;
    if(a == b) return true;
    
    for(let x = 0; x < a.length; x++){
        for(let y = 0; y < b.length; y++){
            if(a[x] == b[y]){
                return true;
            }
        }   
    }

    return false;
};

let compararItens = (a, b)=>{
    let map = {};
    a.forEach(item => {
        if(!map[item]){
            map[item] = true;
        }
    });

    console.log(map)

    for(item of b){
        if(map[item]){
            return true;
        }
    }
    return false;
}

function compararItens2(a, b){
    return a.some(item => b.includes(item));
}
console.log(compararItens2(a,c));