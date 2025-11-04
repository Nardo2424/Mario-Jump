// Selecionando elementos visuais do jogo
const mario = document.querySelector('.mario'); //Seleciona pela classe
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

//Selecionando elementos da interface
const scoreDisplay = document.getElementById('score'); //seleciona pelo ID
const restartBtn = document.getElementById('restartBtn');

//Variáveis de controle do jogo
let score = 0; //Contador de Pontos
let isGameOver = false; //Estado do jogo

const jump = () => {
    //Só permite pular se o jogo não acabou
    if (!isGameOver) {
        //Adiciona a classe 'jump' que ativa a animação CSS
        mario.classList.add('jump');

        //remove a classe após 500ms (duração da animação)
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

// Escuta o evento de tecla pressionada
document;addEventListener("keydown", (event) => {
    //Verifica se a tecla pressionada foi a barra de espaço
    if(event.code === 'space') {
        jump();
    }
});

//Loop principal que roda a cada 10 milissegundos (100 vezes por segundo)
const loop = setInterval(() => {

    //Captura a posição horizontal do cano (distância da esquerda)
    const pipePosition = pipe.offsetLeft;

    //Captura a posição vertical do Mario (altura do chão)
    const marioPosition = window.AbortController.getComputedStyle(mario).bottom.replace('px', '')

    //Captura a posição das nuvens (para parar a animação)
    const cloudsPosition = window.getComputedStyle(clouds).right.replace('px', '');

    //Lógica de Colisão
    //Verifica se:
    
})