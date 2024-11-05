# Jogo de Heróis - Classificação de Ataque

Este projeto define uma classe `Heroi` para representar personagens de diferentes tipos e exibir suas ações de ataque de forma dinâmica. Cada herói tem um tipo específico (mago, guerreiro, monge ou ninja), e o método `atacar()` exibe uma mensagem personalizada baseada no tipo do herói.

## Tecnologias

- JavaScript

## Estrutura da Classe

A classe `Heroi` possui as seguintes propriedades e métodos:

- **Propriedades**:
  - `nome`: Nome do herói.
  - `idade`: Idade do herói.
  - `tipo`: Tipo de herói (por exemplo, "mago", "guerreiro", "monge", "ninja").

- **Método**:
  - `atacar()`: Método que exibe uma mensagem de ataque com base no tipo do herói.

## Tipos de Ataque

O tipo de ataque é definido automaticamente pelo método `atacar()` com base no tipo do herói:

- **Mago** → exibe "usou magia".
- **Guerreiro** → exibe "usou espada".
- **Monge** → exibe "usou artes marciais".
- **Ninja** → exibe "usou shuriken".

Se o tipo do herói for desconhecido, o método exibirá "realizou um ataque desconhecido".

## Exemplo de Uso

```javascript
// Definindo a classe Herói
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

// Exemplo de uso
const heroi1 = new Heroi("Gandalf", 150, "mago");
heroi1.atacar(); // Saída: "O mago atacou usando magia"

const heroi2 = new Heroi("Conan", 30, "guerreiro");
heroi2.atacar(); // Saída: "O guerreiro atacou usando espada"

const heroi3 = new Heroi("Bruce Lee", 32, "monge");
heroi3.atacar(); // Saída: "O monge atacou usando artes marciais"

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar(); // Saída: "O ninja atacou usando shuriken"
