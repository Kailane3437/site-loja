let indexImagem = 0;
let slides = document.querySelectorAll(".carrossel-slide");
let totalSlides = slides.length;

function moverCarrossel(direcao) {
    indexImagem += direcao;

    if (indexImagem < 0) {
        indexImagem = totalSlides - 1;  // Se estiver na primeira imagem, vai para a última
    }
    if (indexImagem >= totalSlides) {
        indexImagem = 0;  // Se estiver na última imagem, vai para a primeira
    }

    // Atualiza a posição do carrossel para a imagem correta
    const carrosselInner = document.querySelector(".carrossel-inner");
    carrosselInner.style.transform = `translateX(-${indexImagem * 100}%)`;
}

function iniciarCarrosselAutomatico() {
    setInterval(() => {
        moverCarrossel(1);  // Passa para a próxima imagem automaticamente
    }, 3000);  // A cada 3 segundos
}

// Inicia o carrossel automático quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    iniciarCarrosselAutomatico();
});

