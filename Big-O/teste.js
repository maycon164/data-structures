let array = [1, 2, 3, 9];
let array2 = [1, 2, 4, 4];

const existsSum8 = array => {
    for(let x = 0; x < array.length; x++){
        for(let y = 0; y < array.length; y++){
            if (array[x] + array[y] == 8) return true; 
        }
    }
    return false;
};

const numeros = [1, 4, 3, 7, 10, 11, 15];
const hasPairWithSum = (array, sum) => {
    let complementos = new Set();

    for(let x = 0; x < array.length; x++){
        if(complementos.has(array[x])) return true;
        complementos.add(sum - array[x]);
    }
    return false;
}

console.log(hasPairWithSum(numeros, 9));