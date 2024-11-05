class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para determinar o tipo de ataque com base no tipo do herói
    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'realizou um ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Teste da classe e do método atacar
const heroi1 = new Heroi("Gandalf", 150, "mago");
heroi1.atacar(); 

const heroi2 = new Heroi("Conan", 30, "guerreiro");
heroi2.atacar(); 

const heroi3 = new Heroi("Bruce Lee", 32, "monge");
heroi3.atacar(); 

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar(); 
