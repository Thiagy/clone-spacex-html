var count = 0;
const optionsnavigation = [ '0%','-7.75%', '-15.56%', '-23.4%', '-31.24%', '-39.08%', '-46.92%', '-54.72%', '-62.52%', '-70.35%', '-83.56%'];

let firstDivslideFooter = document.getElementById('first-divslide-footer');
let optionNavFooter = document.querySelectorAll('.optionNav-footer');
let leftArrowFooter = document.getElementById('leftArrow-footer');
let rightArrowFooter = document.getElementById('rightArrow-footer');

// Função que permite deslocar as imagens
function sliderFooter(num) {
    count = num - 1;
    
    optionNavFooter.forEach((nav, index) => {
        nav.style.backgroundColor = (index === count) ? 'white' : '';
    });

    firstDivslideFooter.style.marginLeft = optionsnavigation[count];

    leftArrowFooter.style.boxShadow = (count === 0) ? 'inset 5px 5px #414041' : 'inset 5px 5px white';
    rightArrowFooter.style.boxShadow = (count === optionNavFooter.length - 1) ? 'inset 5px 5px #414041' : 'inset 5px 5px white';
}

// Função para a seta esquerda de navegação
function lArrowFooter() {
    if (count > 0) {
        count--;
        sliderFooter(count + 1);
    }
}

// Função para a seta direita de navegação
function rArrowFooter() {
    if (count < optionNavFooter.length - 1) {
        count++;
        sliderFooter(count + 1);
    }
}

sliderFooter(1); // Iniciar o slider com a primeira imagem
