let indexImagem = 0;

function moverCarrossel(direcao) {
    const imagens = document.querySelectorAll(".carrossel-imagens img");
    const totalImagens = imagens.length;

    // Atualiza o índice da imagem
    indexImagem += direcao;

    // Se o índice for menor que 0, vai para a última imagem
    if (indexImagem < 0) {
        indexImagem = totalImagens - 1;
    }
    // Se o índice for maior ou igual ao número total de imagens, vai para a primeira
    if (indexImagem >= totalImagens) {
        indexImagem = 0;
    }

    // Mover o carrossel para a posição correta
    const carrossel = document.querySelector(".carrossel-imagens");
    carrossel.style.transform = `translateX(-${indexImagem * 100}%)`;
}
