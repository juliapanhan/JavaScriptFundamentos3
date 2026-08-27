class Jogador {
    constructor(nome, idade, posição){
        this.nome = nome;
        this.idade = idade;
        this.posição = posição;
    }

apresentar(){
    console.log(`Meu nome é ${this.nome}`);
    console.log(`Tenho ${this.idade} anos`);
    console.log(`Minha posição é ${this.posição}`);
    }
    atacar(){
        console.log(`${this.nome} está realizando um ataque`);
    }
    defender(){
        console.log(`${this.nome} está realizando a defesa`);
    }
    receber(){
        console.log(`${this.nome} recebeu a bola`);
    }
    treinar(){
        console.log(`${this.nome} está treinando para a próxima partida`);
    }
    descansar(){
        console.log(`${this.nome} está descansando após o treino`);
    }
}
const Jogador1 = new Jogador("Anna", 17, "Ponteiro");
const Jogador2 = new Jogador("Kaue", 17, "Líbero");
const Jogador3 = new Jogador("Igor", 17, "Levantador");
const Jogador4 = new Jogador("Vinícius", 17, "Central");
const Jogador5 = new Jogador("Pedro", 17, "Oposto");
Jogador1.apresentar();
Jogador2.apresentar();
Jogador3.apresentar();
Jogador4.apresentar();
Jogador5.apresentar();
Jogador1.atacar();
Jogador2.defender();
Jogador3.receber();
Jogador4.atacar();
Jogador5.treinar();
Jogador5.descansar();