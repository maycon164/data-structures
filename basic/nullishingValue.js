'?? operador nulisshing usado para definir um valor não nulo'

'Ex'
let height;
let width = 5;

//let usuario = (user ?? 'Maycon');
//console.log(usuario);

alert(`Uma Conta ${(width ?? 500) * (height ?? 10)}`);

let digaOi = function(){
    alert("OI");
};
let copia = digaOi;
console.log(copia === digaOi);

let ask = (question, yes, no) => {
    confirm(question) ? yes():no();
}
let yes = () => alert("voce respondeu sim");
let no = () => alert("voce respondeu não");

//ask("Você está bem? ", yes, no);

//pergunta2();

function pergunta(){
    confirm("Voce concorda?");
}

let pergunta2 = function(){
    confirm("Voce concorda?");
};

//Função Escopos

let idade = prompt("Qual sua idade? ", 18);
let bemVindo;

(idade > 18) ?
bemVindo = function(){ alert ("VOCE TEM MAIS DE 18 ANOS")}:
bemVindo = function(){ alert ("VOCE TEM MENOS DE 18 ANOS")};

bemVindo();