let user = {
    name: "Maycon",
    "ultimo nome": "Huanca"
};

//Função objeto vazio
let isEmptyObject = obj => {
    for(let key in obj) return false;
    return true;
}
console.log(isEmptyObject(user));

//Monta um objeto a partir de uma lista de objetos
let montarSacola = (itens) => {
    let obj = {};
    itens.forEach(sacola=> {
        Object.keys(sacola).forEach(key => {
            obj[key] = sacola[key];
        });
    });
    return obj;
};

let itens = [{maca:12},{laranja:5},{banana:9},{goiaba:12}];
let sacola = montarSacola(itens);

console.log(sacola)

let salarios = {
    maycon:1200,
    felipe:800,
    joao:200,
    davi:600
};
//Soma de valores do objeto
let soma = obj => {
    let sum = 0;
    if(isEmptyObject(obj)){
        return sum;
    }else{
        for(let key in obj){
            sum += obj[key];
        }
    }
    return sum;
};

let sum = soma(salarios);
console.log(sum);

let dobraValores = obj => {
    if(!isEmptyObject(obj)){
        for(let key in obj){
            if(!isNaN(obj[key])){
                obj[key] *= 2; 
            }
        }
    }
    return obj;
}

let valores = dobraValores({
    idade: 12,
    nome: "Maycon",
    sexo: "M",
    altura: 60
});

console.log(valores);