var isOpen = false;

function toggleMenu() {
    const body = document.body;
    const backdrop = document.getElementById("backdrop");
    const openMenuButton = document.getElementById("openmenu");
    const littleBars = document.querySelectorAll(".little-bar");

    isOpen = !isOpen;

    openMenuButton.style.right = isOpen ? 0 : "";
    body.style.overflow = isOpen ? "hidden" : "";
    backdrop.style.display = isOpen ? "block" : "";

    for (let i = 0; i < littleBars.length; i++) {
        const bar = littleBars[i];
        if (isOpen) {
            bar.style.position = "absolute";
            bar.style.bottom = "0";
            bar.style.transform = i === 0 ? "rotate(45deg)" : i === 2 ? "rotate(-45deg)" : "";
            if (i === 1) {
                bar.style.display = "none";
            }
        } else {
            bar.style.position = "";
            bar.style.bottom = "";
            bar.style.transform = "";
            if (i === 1) {
                bar.style.display = "";
            }
        }
    }
}
//Array com as letras da logo.
const data_logo = [
    {id: 'logo-s', url: '../imagem/home/s.png'},
    {id: 'logo-p', url: '../imagem/home/p.png'},
    {id: 'logo-a', url: '../imagem/home/a.png'},
    {id: 'logo-c', url: '../imagem/home/c.png'},
    {id: 'logo-e', url: '../imagem/home/e.png'},
    {id: 'logo-x', url: '../imagem/home/x.png'},
]
//Array com as options da barra de navegação.
const option_list = [
    {href: 'index2.html', text: 'FALCON 9'},
    {href: 'index3.html', text: 'HUMAN SPACEFLIGHT'},
    {href: 'index4.html', text: 'DRAGON'},
    {href: '', text: 'FALCON HEAVY'},
    {href: '', text: 'STARSHIP'},
    {href: '', text: 'RIDESHARE'},
    {href: '', text: 'STARSHIELD'},
    {href: '', text: 'STARLINK'}
]
//Função que gera a logo dinamicamente
function getlogo(){
    data_logo.forEach(letter => { createLogo(letter) })
}
//Função que gera a opções na barra de navegação dinamicamente
function getoptionlist(){
    option_list.forEach(newoption=> {createoptionlist(newoption)})
}
//Função que cria html da logo
function createLogo(letter){
    const img_letter = document.createElement('img')
    img_letter.setAttribute('id', letter.id)
    img_letter.src= letter.url
    document.getElementById('div-logo').appendChild(img_letter)
}
//Função que cria html das opções da barra de navegação
function createoptionlist(newoption){
    const option = document.createElement('a')
    option.href= newoption.href
    option.innerText= newoption.text
    document.getElementById('option-list').appendChild(option)
}
//Função que cria html do botão que abre menu
function createbuttonopenmenu() {
    const shop = document.createElement('a')

    const box_menu = document.createElement('div')
    const little_bar_1 = document.createElement('div')
    const little_bar_2 = document.createElement('div')
    const little_bar_3 = document.createElement('div')

    shop.setAttribute('id', 'shop-title')
    box_menu.setAttribute('id', 'box-menu')
    shop.href = '#'
    shop.innerText = 'SHOP'

    little_bar_1.setAttribute('class', 'little-bar')
    little_bar_2.setAttribute('class', 'little-bar')
    little_bar_3.setAttribute('class', 'little-bar')

    box_menu.addEventListener('click', toggleMenu)

    box_menu.append(little_bar_1, little_bar_2, little_bar_3)

    const divShop = document.getElementById('div-shop');
    divShop.appendChild(shop);
    divShop.appendChild(box_menu);
}

document.addEventListener('DOMContentLoaded', ()=>{
    getlogo()
    getoptionlist()
    createbuttonopenmenu()
})