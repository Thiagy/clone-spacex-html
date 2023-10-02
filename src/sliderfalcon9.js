var count = 0;

const optionNav = document.querySelectorAll('.optionNav');
const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');
const firstDivSlide = document.getElementById('first-divslide');

//Função que perimte deslocar as imagens
function slider(num){
    
    count = num - 1;
    
    optionNav.forEach((nav, index) => {
        nav.style.backgroundColor = (index === count) ? 'white' : '';
    });

    const marginLeftValue = -count * 20 + '%';
    firstDivSlide.style.marginLeft = marginLeftValue;

    leftArrow.style.boxShadow = (count === 0) ? 'inset 5px 5px #414041' : 'inset 5px 5px white';
    rightArrow.style.boxShadow = (count === optionNav.length - 1) ? 'inset 5px 5px #414041' : 'inset 5px 5px white';
}
// Função para a seta esquerda de navegação
function leftArrowSlide(){
    if (count > 0){
        count--;
        slider(count + 1);
    }
}
// Função para a seta direita de navegação
function rightArrowSlide(){
    if (count < optionNav.length - 1){
        count++;
        slider(count + 1);
    }
}
slider(1)