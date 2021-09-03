//METODOS DE ORDENAÇÃO DE ARRAYS;

let numbers = [1, 43, 5, 56, 12, 90];

numbers.reverse();
numbers.sort((a, b) => a - b);

let pessoas = [
    {name: "Maycon", idade: 28},
    {name: "Felipe", idade: 10},
    {name: "Mendoza", idade: 19},
    {name: "Huanca", idade: 10}
]

let comparePessoa = (p1, p2) => {
    if(p1.idade < p2.idade){
        return -1;
    }
    return 1;
    
}

console.log(pessoas.sort(comparePessoa));
