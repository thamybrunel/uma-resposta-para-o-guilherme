/* ==========================================================
   PROJETO: Uma resposta para o Guilherme ❤️
   script.js - Parte 1
   ========================================================== */


/* ==========================================================
   ELEMENTOS
   ========================================================== */

const abertura = document.getElementById("abertura");
const introducao = document.getElementById("introducao");
const texto = document.getElementById("texto");



/* ==========================================================
   FRASES DA ABERTURA
   ========================================================== */

const frases = [

    "Oi...",

    "Antes de responder o que você acabou de me perguntar...",

    "...eu queria te mostrar uma coisinha.",

    "...",

    "Tem pessoas que escrevem cartas.",

    "Tem pessoas que escrevem poemas.",

    "Como você é programador...",

    "Eu resolvi responder do seu jeito."

];



/* ==========================================================
   CONFIGURAÇÕES
   ========================================================== */

let indiceFrase = 0;
let indiceLetra = 0;



/* ==========================================================
   ESCREVER LETRA POR LETRA
   ========================================================== */

function escrever() {

    if (indiceFrase >= frases.length) {

        setTimeout(() => {

            abertura.classList.add("esconder-suave");

            setTimeout(() => {

                abertura.classList.add("hidden");

                introducao.classList.remove("hidden");
                introducao.classList.add("mostrar-suave");

            }, 700);

        }, 1200);

        return;

    }

    const fraseAtual = frases[indiceFrase];

    if (indiceLetra < fraseAtual.length) {

        texto.innerHTML += fraseAtual.charAt(indiceLetra);

        indiceLetra++;

        setTimeout(escrever, 45);

    }

    else {

        indiceFrase++;

        indiceLetra = 0;

        if (fraseAtual !== "") {
    texto.innerHTML += "<br><br>";
}

        setTimeout(escrever, 900);

    }

}



/* ==========================================================
   INICIAR
   ========================================================== */

window.onload = () => {

    escrever();

};
/* ==========================================================
   BOTÃO DA INTRODUÇÃO
========================================================== */

const btnIntroducao = document.getElementById("btnIntroducao");

const loading = document.getElementById("loading");

const progresso = document.querySelector(".progresso");

const terminal = document.getElementById("terminal");



btnIntroducao.addEventListener("click", () => {

    introducao.classList.remove("mostrar-suave");

    introducao.classList.add("esconder-suave");



    setTimeout(() => {

        introducao.classList.add("hidden");



        loading.classList.remove("hidden");

        loading.classList.add("mostrar-suave");



        carregarBarra();

    },700);

});



/* ==========================================================
   LOADING
========================================================== */

function carregarBarra(){

    let valor=0;

    const intervalo=setInterval(()=>{

        valor++;

        progresso.style.width=valor+"%";

        if(valor>=100){

            clearInterval(intervalo);

            setTimeout(()=>{

                loading.classList.remove("mostrar-suave");

                loading.classList.add("esconder-suave");



                setTimeout(()=>{

                    loading.classList.add("hidden");



                    terminal.classList.remove("hidden");

                    terminal.classList.add("mostrar-suave");



                    escreverTerminal();

                },700);

            },500);

        }

    },22);

}
/* ==========================================================
   TERMINAL
========================================================== */

const terminalTexto = document.getElementById("terminalTexto");

const linhasTerminal = [
    "> procurando_motivos_para_dizer_sim.exe",
    "",
    "Iniciando análise...",
    "",
    "✔ Faz ela sorrir.",
    "✔ Entrega flores.",
    "✔ Faz ela se sentir segura.",
    "✔ Deixa os dias mais leves.",
    "✔ Conquistou o coração dela.",
    "",
    "Resultado encontrado.",
    "",
    "Nome:",
    "Guilherme.",
    "",
    "Compatibilidade:",
    "100% ❤️"
];

let indiceLinhaTerminal = 0;


/* ==========================================================
   ESCREVER LINHAS NO TERMINAL
========================================================== */

function escreverTerminal() {

    if (indiceLinhaTerminal >= linhasTerminal.length) {

        setTimeout(() => {

            mostrarBotaoTerminal();

        }, 900);

        return;

    }

    const linha = linhasTerminal[indiceLinhaTerminal];

    escreverLinhaTerminal(linha, 0);
}


/* ==========================================================
   ESCREVER CADA LETRA DA LINHA
========================================================== */

function escreverLinhaTerminal(linha, indiceLetraTerminal) {

    if (indiceLetraTerminal < linha.length) {

        terminalTexto.innerHTML += linha.charAt(indiceLetraTerminal);

        setTimeout(() => {

            escreverLinhaTerminal(
                linha,
                indiceLetraTerminal + 1
            );

        }, 35);

    } else {

        terminalTexto.innerHTML += "<br>";

        indiceLinhaTerminal++;

        setTimeout(escreverTerminal, 450);

    }

}


/* ==========================================================
   BOTÃO DO TERMINAL
========================================================== */

function mostrarBotaoTerminal() {

    const botao = document.createElement("button");

    botao.textContent = "Continuar →";

    botao.id = "btnTerminal";

    terminalTexto.appendChild(botao);

    botao.addEventListener("click", () => {

        terminal.classList.remove("mostrar-suave");
        terminal.classList.add("esconder-suave");

        setTimeout(() => {

            terminal.classList.add("hidden");

            const carta = document.getElementById("carta");

            carta.classList.remove("hidden");
            carta.classList.add("mostrar-suave");

        }, 700);

    });

}
/* ==========================================================
   CARTA → RESPOSTA
========================================================== */

const carta = document.getElementById("carta");
const btnCarta = document.getElementById("btnCarta");
const resposta = document.getElementById("resposta");

btnCarta.addEventListener("click", () => {

    carta.classList.remove("mostrar-suave");
    carta.classList.add("esconder-suave");

    setTimeout(() => {

        carta.classList.add("hidden");

        resposta.classList.remove("hidden");
        resposta.classList.add("mostrar-suave");

    }, 700);

});


/* ==========================================================
   RESPOSTA → FINAL
========================================================== */

const btnResposta = document.getElementById("btnResposta");
const final = document.getElementById("final");
const contador = document.getElementById("contador");

btnResposta.addEventListener("click", () => {

    resposta.classList.remove("mostrar-suave");
    resposta.classList.add("esconder-suave");

    setTimeout(() => {

        resposta.classList.add("hidden");

        final.classList.remove("hidden");
        final.classList.add("mostrar-suave");

        criarPetalas();

        setTimeout(() => {

            contador.classList.remove("hidden");
            contador.classList.add("mostrar-suave");

            iniciarContador();

        }, 2500);

    }, 700);

});
/* ==========================================================
   PÉTALAS
========================================================== */

function criarPetalas() {

    const quantidade = 45;

    for (let i = 0; i < quantidade; i++) {

        setTimeout(() => {

            const petala = document.createElement("div");

            petala.classList.add("petala");

            petala.style.left = Math.random() * 100 + "vw";
            petala.style.animationDuration =
                4 + Math.random() * 4 + "s";

            petala.style.setProperty(
                "--desvio",
                (Math.random() * 220 - 110) + "px"
            );

            petala.style.transform =
                "scale(" + (0.6 + Math.random() * 0.8) + ")";

            document.body.appendChild(petala);

            setTimeout(() => {
                petala.remove();
            }, 8500);

        }, i * 120);

    }

}


/* ==========================================================
   CONTADOR
========================================================== */

/*
Depois que ele pedir você em namoro,
troque a data abaixo pela data e hora exatas.

Exemplo:
2026-08-15T20:30:00
*/

const dataInicioNamoro = new Date("2026-06-14T00:00:00");


function iniciarContador() {

    atualizarContador();

    setInterval(atualizarContador, 1000);

}


function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - dataInicioNamoro;

    if (diferenca < 0) {
        diferenca = 0;
    }

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


/* ==========================================================
   SURPRESA NO CONSOLE
========================================================== */

console.log(
    "%cOlá, Guilherme! 💚",
    "font-size: 22px; font-weight: bold; color: #39d353;"
);

console.log(
    "%cSe você abriu o console, sua curiosidade venceu 😂",
    "font-size: 14px; color: #b8c0bb;"
);

console.log(
    "%cEste site foi feito com muito carinho pela Thamyres.",
    "font-size: 14px; color: #7ee787;"
);

console.log(
    "%cAgora fecha o console e vai aproveitar sua namorada ❤️",
    "font-size: 14px; color: #ffffff;"
);