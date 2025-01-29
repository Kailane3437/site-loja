let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
let navButtons = document.querySelectorAll('.carousel-nav button');

// Função para mostrar o slide
function showSlide(index) {
    // Verifica se o índice é válido
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Move o carrossel para a posição do slide atual
    const offset = -currentIndex * 100; // move para o slide correto
    document.getElementById('carouselImages').style.transform = `translateX(${offset}%)`;

    // Atualiza as bolinhas de navegação
    navButtons.forEach((button, i) => {
        button.classList.toggle('active', i === currentIndex);
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Função para voltar para o slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Cria as bolinhas de navegação dinamicamente
function createNavDots() {
    const navContainer = document.querySelector('.carousel-nav');
    slides.forEach((_, i) => {
        const button = document.createElement('button');
        button.addEventListener('click', () => showSlide(i));
        navContainer.appendChild(button);
    });

    // Recarrega os botões de navegação
    navButtons = document.querySelectorAll('.carousel-nav button');
}

// Inicializa o carrossel e cria as bolinhas de navegação
function initializeCarousel() {
    createNavDots();
    showSlide(currentIndex); // Exibe o primeiro slide ao carregar
    setInterval(nextSlide, 3000); // Avança automaticamente a cada 3 segundos
}

// Chama a função de inicialização
initializeCarousel();
// Adicionando os produtos ao carrinho
document.querySelectorAll('.adicionar-carrinho').forEach(button => {
    button.addEventListener('click', function() {
        let nomeProduto = this.getAttribute('data-nome');
        let precoProduto = parseFloat(this.getAttribute('data-preco'));

        // Verificando se o carrinho já existe no localStorage
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        // Adicionando o produto ao carrinho
        carrinho.push({ nome: nomeProduto, preco: precoProduto });

        // Salvando o carrinho no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Redirecionando para a página do formulário
        window.location.href = "formulario.html";
    });
});

