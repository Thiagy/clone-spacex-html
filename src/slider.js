var count = 0

function slider(num){
    const rightArrow = document.getElementById('rightArrow')
    const leftArrow = document.getElementById('leftArrow')
    const firstDivSlide = document.getElementById('first-divslide')
    const optionNav = document.getElementsByClassName('optionNav')
    optionNav[0].style.backgroundColor='white'
    if(num===1){
        optionNav[0].style.backgroundColor='white'
        optionNav[1].style.backgroundColor=''
        optionNav[2].style.backgroundColor=''
        optionNav[3].style.backgroundColor=''
        optionNav[4].style.backgroundColor=''
        firstDivSlide.style.marginLeft=0
        leftArrow.style.boxShadow='inset 5px 5px #414041'
    }
    if(num===2){
        optionNav[0].style.backgroundColor=''
        optionNav[1].style.backgroundColor='white'
        optionNav[2].style.backgroundColor=''
        optionNav[3].style.backgroundColor=''
        optionNav[4].style.backgroundColor=''
        firstDivSlide.style.marginLeft='-20%'
        leftArrow.style.boxShadow='inset 5px 5px white'
        rightArrow.style.boxShadow='inset 5px 5px white'
    }
    if(num===3){
        optionNav[0].style.backgroundColor=''
        optionNav[1].style.backgroundColor=''
        optionNav[2].style.backgroundColor='white'
        optionNav[3].style.backgroundColor=''
        optionNav[4].style.backgroundColor=''
        firstDivSlide.style.marginLeft='-40%'
        leftArrow.style.boxShadow='inset 5px 5px white'
        rightArrow.style.boxShadow='inset 5px 5px white'
    }
    if(num===4){
        optionNav[0].style.backgroundColor=''
        optionNav[1].style.backgroundColor=''
        optionNav[2].style.backgroundColor=''
        optionNav[3].style.backgroundColor='white'
        optionNav[4].style.backgroundColor=''
        firstDivSlide.style.marginLeft='-60%'
        leftArrow.style.boxShadow='inset 5px 5px white'
        rightArrow.style.boxShadow='inset 5px 5px white'
    }
    if(num===5){
        optionNav[0].style.backgroundColor=''
        optionNav[1].style.backgroundColor=''
        optionNav[2].style.backgroundColor=''
        optionNav[3].style.backgroundColor=''
        optionNav[4].style.backgroundColor='white'
        firstDivSlide.style.marginLeft='-80%'
        rightArrow.style.boxShadow='inset 5px 5px #414041'
    }
}

//função para seta esquerda de navegação
function leftArrowSlide(){
    const rightArrow = document.getElementById('rightArrow')
    const leftArrow = document.getElementById('leftArrow')
    const firstDivSlide = document.getElementById('first-divslide')
    count-=20
    firstDivSlide.style.marginLeft=`-${count}%`
    if(count>=80){
        count=80
        rightArrow.style.boxShadow='inset 5px 5px #414041'
        leftArrow.style.boxShadow='inset 5px 5px white'
    }
    if(count===0){
        leftArrow.style.boxShadow='inset 5px 5px #414041'
    }
    if(count>0 && count<80){
        rightArrow.style.boxShadow='inset 5px 5px #fff'
        leftArrow.style.boxShadow='inset 5px 5px #fff'
    }
}
//função para seta direita de navegação
function rightArrowSlide(){
    const rightArrow = document.getElementById('rightArrow')
    const leftArrow = document.getElementById('leftArrow')
    const firstDivSlide = document.getElementById('first-divslide')
    count+=20
    firstDivSlide.style.marginLeft=`-${count}%`
    if(count>80){
        count=80
        firstDivSlide.style.marginLeft=`-${count}%`
        leftArrow.style.boxShadow='inset 5px 5px white'
    }
    if(count>75){
        rightArrow.style.boxShadow='inset 5px 5px #414041'
    }
    if(count>0 && count<80){
        rightArrow.style.boxShadow='inset 5px 5px #fff'
        leftArrow.style.boxShadow='inset 5px 5px #fff'
    }
}
