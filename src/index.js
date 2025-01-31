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

// const player3 = {
//     NOME: "Peach",
//     VELOCIDADE: 3,
//     MANOBRABILIDADE: 4,
//     PODER: 2,
//     PONTOS: 0,
// };

// const player4 = {
//     NOME: "Yoshi",
//     VELOCIDADE: 2,
//     MANOBRABILIDADE: 4,
//     PODER: 3,
//     PONTOS: 0,
// };

// const player5 = {
//     NOME: "Donkey Kong",
//     VELOCIDADE: 2,
//     MANOBRABILIDADE: 2,
//     PODER: 5,
//     PONTOS: 0,
// };

// const player6 = {
//     NOME: "Bowser",
//     VELOCIDADE: 5,
//     MANOBRABILIDADE: 2,
//     PODER: 2,
//     PONTOS: 0,
// };


// Função que rola os dados aleatoriamente de 1 à 6 com "Math.random() * 6 + 1" e arredonda para não dar numeros quebrados "Math.floor" e retorna o valor do dado
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result; 

    switch (true) {
        case random < 0.33: 
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;    
        default:
            result = "CONFRONTO"
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round ++){
        console.log(`🏁 Rodada ${round}`);

        // Sortear bloco
        let bloco = await getRandomBlock()
        console.log(`Bloco: ${bloco}`);

        // Rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // Teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (bloco == "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        } 

        if (bloco == "CURVA"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }

        if (bloco == "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`)

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

            // Verificando o vencedor do confronto com if ternário
            if(powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
                character2.PONTOS--;
            }
            if(powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
                character1.PONTOS--;
            }
            

            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido." : "");
            
        }

        // Verificando o vencedor
        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }

        console.log("===========================================================");
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado Final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if(character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆🎉`);
    } else if(character2.PONTOS > character1.PONTOS) {
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆🎉`);
    } else {
        console.log(`\nA corrida terminou em empate! 🏁🏁`);
    }
}

// A função main é a função principal e se vc criar uma função e colocar ela entre parenteses e colocar outro parenteses depois ela se torna uma função auto invocável. 
(async function main() {
    console.log(`🏁🚥 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();
