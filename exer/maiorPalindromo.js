let palavra = "aasaaivecasvascxax";
//let palavra = "abcd"
//SOLUÇÃO LOG (O ^ n) + N

let weakset = new WeakSet();


function maiorPalindromo(word){
    let set = new Set();
    let length = word.length;
    

    for(let x = 0; x < length; x++){
        for(let y = x + 1; y < length; y++){
            let palavra = word.slice(x, y + 1);
            let palavraInversa = palavra.split("").reverse().join('');
            if(palavra === palavraInversa) {
                
                set.add(palavra);
            }
        }
    }

    let len = 0;
    let palindromo = "";
    for(let palavra of set){
        if(palavra.length > len) {
            palindromo = palavra;
            len = palavra.length
        } 
    }
    
    return palindromo;
}
console.log(maiorPalindromo(palavra));


