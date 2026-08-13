// function somar(a , b){
//     return a + b;
// }

// const resultado = somar(15 , 30);
// console.log(resultado);

// console.log(somar(7,9));

// let ligado = false;

// function ligaDesligar(){
//     if(ligado === false){
//         ligado = true;
//         return "Ligado"
//     }else{
//         ligado = true;
//         return "Desligado"
//     }
// }
let botao = true;
function ligaDesligar(){
    botao = !botao
    return botao ? "Ligado" : "Desligado"
}
console.log(ligaDesligar());
console.log(ligaDesligar());