class Funcionario{
    constructor (nome,salario){
        this.nome = nome;
        this.salario = salario;
    }
    apresentar(){
        console.log(`${this.nome} ganha de salario ${this.salario}`);
    }
}

class Professor extends Funcionario {
    constructor (nome, salario, disciplina) {
        super (nome, salario,);
    }
    apresentar() {
        console.log(`${this.nome} ganha de salario ${this.salario}
            e ministra á disciplina de ${this.disciplina}`);
    }

    atacar() {
        console.log(`${this.nome} está realizando um ataque!`);
    }
}
const jogador1 = new Jogador("Anna", 17, "Ponteira");
jogador1.apresentar();
jogador1.atacar();