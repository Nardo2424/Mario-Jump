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
    //1. O cano está na zona de colisão (entre 0px e 120px da esquerda)
    //2. O Mario está baixo demais (menos de 80px do chão)
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        //Para todas as animações
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px' //Congela a posição do cano

        clouds.style.animation = 'none';
        clouds.style.right = '${cloudsPosition}px'; //Congela nuvens

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px'; //Congela Mario

        //Troca a imagem do Mario para "game over"

        mario.src = '/Images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px';

        //Atualiza o estado do jogo
        isGameOver = true;
        restartBtn.style.display = 'block'; //Mostra botão de reiniciar

        clearInterval(loop); //Para o loop principal
    }

    //Sistema de pontuação
    //Aumenta a pontuação a cada ciclo (se o jogo não acabou)
    if (!isGameOver) {
        score++;
        scoreDisplay.textContent = score; //Atualiza o display
    }
}, 10); //Executa a cada 10,s

//Quando o botão de reiniciar for clicado
restartBtn.addEventListener('click', () => {
    location.reload(); //Recarrega a página inteira
});

//Adicione estas linhas temporariamente para testar:

//1. Teste de posicionamento
console.log("Posição do pipe:", pipePosition);
console.log("Posição do Mario:", marioPosition);

//2. Teste de colisão

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    console.log("Colisão Detectada!")
}

//3. Teste de pontuação
console.log("Pontuação atual:", score);

//Dica: Adicione esta lógica dentro do loop
if (score > 100 && score < 101) {
    pipe.style.animationDuration = '1.5s'; //Mais rápido!
}

if (score > 300 && score < 301) {
    pipe.style.animationDuration = '1s'; //Ainda mais rápido!
}

const jumpSound = document.getElementById('jumpSound')
const gameOverSound = document.getElementById('gameOverSound')

