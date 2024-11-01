alert("Cálculo de dano de personagens");

const personagem1 = prompt("Digite o nome do primeiro personagem: ");
const powerhitp01 = parseInt(prompt("Poder de ataque de " + personagem1 + ": "));
const personagem2 = prompt("Digite o nome do segundo personagem: ");
const powerdefp02 = parseInt(prompt("Pontos de defesa do " + personagem2 + ": "));
const qtdptlife02 = parseInt(prompt("Pontos de vida: "));
const escudoper02 = prompt(personagem2 + " possui escudo? (S/N) ");

let dano = 0;
let vidarestante = 0;

const escudoPersonagem02 = (escudoper02 === "S" || escudoper02 === "s");

if (powerhitp01 > powerdefp02 && escudoPersonagem02) {
    dano = Math.max(Math.floor((powerhitp01 - powerdefp02) / 2), 1); // O dano será no mínimo 1
} else if (powerhitp01 > powerdefp02 && !escudoPersonagem02) {
    dano = Math.max(powerhitp01 - powerdefp02, 1); // O dano será no mínimo 1
} else if (powerhitp01 <= powerdefp02) {
    dano = 0;
}

vidarestante = qtdptlife02 - dano;

if (vidarestante <= 0) {
    alert(
        "O dano recebido pelo " + personagem2 + " foi de: " + dano +
        ", portanto, infelizmente o " + personagem2 + " morreu :(" 
    );
} else {
    alert(
        "O dano recebido pelo " + personagem2 + " foi de: " + dano +
        ". A quantidade de vida restante foi: " + vidarestante
    );
}
