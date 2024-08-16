const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a fome se manifesta como consequência direta de um conflito armado?",
        alternativas: [
            {
                texto: "A fome surge devido à destruição de infraestruturas agrícolas e sistemas de distribuiçãode alimentos, que limita o acesso da população aos recursos alimentares.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Em guerras, as infraestruturas essenciais, como fazendas, armazéns eredes de distribuição de alimentos, são frequentemente destruídas ou danificadas,",
                afirmacao: "Quis saber como usar IA no seu dia a diadificultando o acesso da população a alimentos e provocando fome.)."
            }
        ]
    },
    {
        enunciado: "Qual é um dos efeitos da fome prolongada em uma população durante um conflito?",
        alternativas: [
            {
                texto: "A fome é causada exclusivamente pelo bloqueio internacional das fronteiras e aproibição de importação de alimentos.",
                afirmacao: "Embora bloqueios internacionais possam afetar a disponibilidade dealimentos, a fome em contextos de guerra é frequentemente causada por danosdiretos à infraestrutura local e não apenas por bloqueios internacionais.)",
            },
            {
                texto: "O aumento da mortalidade infantil e a deterioração da saúde geral da população, comriscos elevados de doenças e desnutrição.",
                afirmacao: "A fome prolongada durante um conflito pode levar a uma alta taxa demortalidade infantil e a uma deterioração geral da saúde, devido à desnutrição e àmaior vulnerabilidade a doenças.)",
            }
        ]
    },
    {
        enunciado: "Como a comunidade internacional pode ajudar a mitigar os efeitos da fome em regiõesafetadas por conflitos?",
        alternativas: [
            {
                texto: "A criação de novas oportunidades econômicas para a população afetada, como osurgimento de mercados paralelos.",
                afirmacao: "Enquanto mercados paralelos podem surgir, a fome não é uma causade oportunidades econômicas positivas; pelo contrário, ela geralmente resulta emgraves problemas de saúde e sociais.)",
            },
            {
                texto: "A criação de novas oportunidades econômicas para a população afetada, como osurgimento de mercados paralelos.",
                afirmacao: "Enquanto mercados paralelos podem surgir, a fome não é uma causade oportunidades econômicas positivas; pelo contrário, ela geralmente resulta emgraves problemas de saúde e sociais.)",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por responder";
    caixaAlternativas.textContent = "Em guerras, as infraestruturas essenciais, como fazendas, armazéns e redes de distribuição de alimentos, são frequentemente destruídas ou danificadas,dificultando o acesso da população a alimentos e provocando fome. Embora bloqueios internacionais possam afetar a disponibilidade dealimentos, a fome em contextos de guerra é frequentemente causada por danosdiretos à infraestrutura local e não apenas por bloqueios internacionais. A fome prolongada durante um conflito pode levar a uma alta taxa demortalidade infantil e a uma deterioração geral da saúde, devido à desnutrição e àmaior vulnerabilidade a doenças. Enquanto mercados paralelos podem surgir, a fome não é uma causade oportunidades econômicas positivas; pelo contrário, ela geralmente resulta emgraves problemas de saúde e sociais. A ajuda humanitária é crucial para aliviar a fome durante conflitos,fornecendo alimentos, medicamentos e apoio para a reconstrução dasinfraestruturas danificadas. Embora sanções possam ser uma ferramenta política, elas geralmenteagravam a situação humanitária e não ajudam a mitigar diretamente a fome emregiões afetadas por conflitos.";
}

mostraPergunta();