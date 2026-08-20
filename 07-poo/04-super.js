class Funcionario{
    constructor(nome, salario){
        this.salario = salario;
        this.nome = nome;
    }
}

class Professor extends Funcionario{
    constructor(nome, salario, disciplina){
        super(nome, salario);
        this.disciplina = disciplina;
    }
}

const professor = new Professor ("Jansen", 50000, "Devops");
console.log(professor)