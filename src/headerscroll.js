var lastScrollTop = 0
//Função que permite omitir o header quando a rolagem da página é feita pra baixo
function scroll(){

    let distance_top = document.documentElement.scrollTop; 
    let header = document.getElementById("header")

    if(distance_top > lastScrollTop){
        header.style.opacity=0
    }else{
        header.style.opacity=''
    }
    lastScrollTop = distance_top

}

window.addEventListener('scroll', scroll)