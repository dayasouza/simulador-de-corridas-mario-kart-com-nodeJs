// Criando objetos jogadores
const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

const player3 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};

const player4 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};

const player5 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

const player6 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 2,
    PONTOS: 0,
};


// Função que rola os dados aleatoriamente de 1 à 6 com "Math.random() * 6 + 1" e arredonda para não dar numeros quebrados "Math.floor" e retorna o valor do dado
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// A função main é a função principal e se vc criar uma função e colocar ela entre parenteses e colocar outro parenteses depois ela se torna uma função auto invocável. 
(async function main() {
    console.log("hello");
})();
