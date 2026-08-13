function verificarAprovacao(media){
    if (media >= 7){
        return "Aprovado";
    }
    return "Reprovado";
}
console.log(verificarAprovacao(8));

// ou
// function verificarAprovacao(media){
    // return media >= 7 ? "Aprovado": "Reprovado"
// }
// console.log(verificarAprovacao(8));