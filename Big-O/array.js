let array = [12, 34, 5, 6, 1, -2, 9, 10, -2, 12, 34, 1];

function contarPares(array, n){
    array.sort();
    let pares = 0;
    for(let x = 0; x < n; x++){
        if(array[x] == array[x+1]){
            pares++;
            x++;
        }
    }
    console.log(pares);
}

contarPares(array, array.length);