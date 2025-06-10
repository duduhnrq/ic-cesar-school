let ensinoMedio = prompt("Você já concluiu o ensino médio? (sim/não)");
let idade = parseInt(prompt("Qual é a sua idade?"));
let faculdade = prompt("Você está cursando alguma faculdade? (sim/não)");

if (ensinoMedio.toLowerCase() === "sim" && idade >= 18 && faculdade.toLowerCase() === "não") {
    alert("Você pode se inscrever no programa de estágio.");
} else {
    alert("Você não pode se inscrever no programa de estágio.");
}