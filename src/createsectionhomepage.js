//Array de dados de cada seção 
const sectionhomepage = [

    {title: 'RECENT LAUNCH', subtitle: 'CREW-6 MISSION', namebutton: 'WATCH', urlbackgrounimage: 'imagem/home/01.jpg', statusarrow: true, urldownarrow: 'imagem/home/arrowDown.gif'},
    {title: 'UPCOMING LAUNCH', subtitle: 'STARLINK MISSION', namebutton: 'WATCH', urlbackgrounimage: 'imagem/home/03.jpg', statusarrow: false, urldownarrow: 'imagem/home/arrowDown.gif'},
    {title: '', subtitle: 'STARSHIP UPDATE', namebutton: 'LEARN MORE', urlbackgrounimage: 'imagem/home/04.jpg', statusarrow: false, urldownarrow: 'imagem/home/arrowDown.gif'},
    {title: '', subtitle: 'STARSHIP SELECTED', namebutton: 'LEARN MORE', urlbackgrounimage: 'imagem/home/05.jpg', statusarrow: false, urldownarrow: 'imagem/home/arrowDown.gif'},
    {title: 'RECENT LAUNCH', subtitle: 'STARLINK MISSION', namebutton: 'REWATCH', urlbackgrounimage: 'imagem/home/02.gif', statusarrow: false, urldownarrow: 'imagem/home/arrowDown.gif'}

]
//Função que define o html dos componentes principais na homepage
function createhtmlsectionhomepage(section) {
    const sectionElement = document.createElement('section');
    const box_text = document.createElement('div');
    const title = document.createElement('p');
    const box_sub_title_button = document.createElement('div');
    const text = document.createElement('h1');
    const btn_white_border = document.createElement('button');
    const box_down_arrow = document.createElement('a');
    const down_arrow = document.createElement('img');

    sectionElement.setAttribute('id', 'section-1');
    sectionElement.style.backgroundImage = `url(${section.urlbackgrounimage})`;
    box_text.setAttribute('class', 'box-text');
    title.setAttribute('class', 'box-title');
    text.setAttribute('class', 'text');
    btn_white_border.setAttribute('class', 'btn-white-border');
    btn_white_border.setAttribute('id', 'btn-white-border');
    box_down_arrow.setAttribute('id', 'down-arrow');
    box_down_arrow.setAttribute('href', '#section-2');
    down_arrow.setAttribute('alt', '#section-2');

    title.innerText = section.title;
    text.innerText = section.subtitle;
    btn_white_border.innerText = section.namebutton;

    if (section.statusarrow) {
        down_arrow.src = section.urldownarrow;
        box_down_arrow.append(down_arrow);
    }

    box_sub_title_button.append(text, btn_white_border);
    box_text.append(title, box_sub_title_button);
    sectionElement.append(box_text, box_down_arrow);

    document.querySelector('main').appendChild(sectionElement);
}
//Função que gera os componentes principais na homepage
function getSectionsHomepage(){
    sectionhomepage.forEach(section => {
        createhtmlsectionhomepage(section);
    });
}

document.addEventListener('DOMContentLoaded', getSectionsHomepage);
