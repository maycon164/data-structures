let vetor = ['A', 'B', 'C', 'D', 'E', 'F'];

function rotacionar ( vetor, x ) {
    for(let i = 0; i < x; i++){
        let final = vetor[vetor.length - 1];
        for(let j = vetor.length - 1; j >= 0; j--){
            vetor[j] = vetor[j - 1];
        }
        vetor[0] = final;
    }
    console.log(vetor)
}

rotacionar(vetor, 5)