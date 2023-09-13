var sum = 0

function sliderFooter(num){
    let firstDivslideFooter = document.getElementById('first-divslide-footer')
    let optionNavFooter = document.getElementsByClassName('optionNav-footer')
    let leftArrowSlide = document.getElementById('leftArrow-footer')
    let rightArrowFooter = document.getElementById('rightArrow-footer')

    switch(num){
        case 0:
            sum=0
            leftArrowSlide.style.boxShadow= 'inset 5px 5px #414041';
            rightArrowFooter.style.boxShadow ='inset 5px 5px white';
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[0].style.backgroundColor = 'white';
            break;
        case 1:
            sum=7.9
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[1].style.backgroundColor = 'white';
            break;
        case 2:
            sum=15.8
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[2].style.backgroundColor = 'white';
            break;
        case 3:
            sum=23.7
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[3].style.backgroundColor = 'white';
            break;
        case 4:
            sum=31.6
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[4].style.backgroundColor = 'white';
            break;
        case 5:
            sum=39.5
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[5].style.backgroundColor = 'white';
            break;
        case 6:
            sum=47.4
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[6].style.backgroundColor = 'white';
            break;
        case 7:
            sum=55.3
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[7].style.backgroundColor = 'white';
            break;
        case 8:
            sum=63.2
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[8].style.backgroundColor = 'white';
            break;
        case 9:
            sum=71.1
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[9].style.backgroundColor = 'white';
            break;
        case 10:
            sum=83.55
            rightArrowFooter.style.boxShadow ='inset 5px 5px #414041';
            leftArrowSlide.style.boxShadow= 'inset 5px 5px white';
            for(let n = 0; n < 11; n++){
                optionNavFooter[n].style.backgroundColor = '';
            }
            optionNavFooter[10].style.backgroundColor = 'white';
            break;
    }
    if(num>0 && num<10){
            leftArrowSlide.style.boxShadow= 'inset 5px 5px white';
            rightArrowFooter.style.boxShadow ='inset 5px 5px white'
    }
    firstDivslideFooter.style.marginLeft=`-${sum}%`;
}

function leftArrowFooter(){

    let firstDivslideFooter = document.getElementById('first-divslide-footer')
    let optionNavFooter = document.getElementsByClassName('optionNav-footer')
    let leftArrowSlide = document.getElementById('leftArrow-footer')
    let rightArrowFooter = document.getElementById('rightArrow-footer')

    sum-=7.9
    sum = Math.round(sum * 10) / 10;
    
    if(sum>=0){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[0].style.backgroundColor='white'
        leftArrowSlide.style.boxShadow= 'inset 5px 5px #414041';
        rightArrowFooter.style.boxShadow ='inset 5px 5px white';
    }
    if(sum>=7.9){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[1].style.backgroundColor='white'
    }
    if(sum>=15.8){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[2].style.backgroundColor='white'
    }
    if(sum>=23.7){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[3].style.backgroundColor='white'
    }
    if(sum>=31.6){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[4].style.backgroundColor='white'
    }
    if(sum>=39.5){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[5].style.backgroundColor='white'
    }
    if(sum>=47.4){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[6].style.backgroundColor='white'
    }
    if(sum>=55.3){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[7].style.backgroundColor='white'
    }
    if(sum>=63.18){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[8].style.backgroundColor='white'
    }
    if(sum>=71.1){
        sum=71.1
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[9].style.backgroundColor='white'
    }
    if(sum>=79){
        firstDivslideFooter.style.marginLeft=`-${sum}%`;
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[10].style.backgroundColor='white'
        leftArrowSlide.style.boxShadow= 'inset 5px 5px white';
        rightArrowFooter.style.boxShadow ='inset 5px 5px #414041';
    }
    if(sum<0){
        sum=0
    }
    if(sum>0 && sum<83.55){
        leftArrowSlide.style.boxShadow= 'inset 5px 5px white';
        rightArrowFooter.style.boxShadow ='inset 5px 5px white';
    }
    firstDivslideFooter.style.marginLeft=`-${sum}%`;
    console.log(`valor atual: ${sum}`)
}

function rightArrowFooter(){
    let firstDivslideFooter = document.getElementById('first-divslide-footer')
    let optionNavFooter = document.getElementsByClassName('optionNav-footer')
    let leftArrowSlide = document.getElementById('leftArrow-footer')
    let rightArrowFooter = document.getElementById('rightArrow-footer')
    
    sum+=7.9
    sum = Math.round(sum * 10) / 10;
    
    if(sum>=0){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[0].style.backgroundColor='white'
        leftArrowSlide.style.boxShadow= 'inset 5px 5px #414041';
        rightArrowFooter.style.boxShadow ='inset 5px 5px white';
    }
    if(sum>=7.9){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[1].style.backgroundColor='white'
    }
    if(sum>=15.8){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[2].style.backgroundColor='white'
    }
    if(sum>=23.7){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[3].style.backgroundColor='white'
    }
    if(sum>=31.6){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[4].style.backgroundColor='white'
    }
    if(sum>=39.5){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[5].style.backgroundColor='white'
    }
    if(sum>=47.4){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[6].style.backgroundColor='white'
    }
    if(sum>=55.3){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[7].style.backgroundColor='white'
    }
    if(sum>=63.18){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[8].style.backgroundColor='white'
    }
    if(sum>=71.1){
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[9].style.backgroundColor='white'
    }
    if(sum>=79){
        sum=83.6
        firstDivslideFooter.style.marginLeft=`-${sum}%`;
        for(let n = 0; n < 11; n++){
            optionNavFooter[n].style.backgroundColor=''
        }
        optionNavFooter[10].style.backgroundColor='white'
        leftArrowSlide.style.boxShadow= 'inset 5px 5px white';
        rightArrowFooter.style.boxShadow ='inset 5px 5px #414041';
    }
    if(sum>0 && sum<83.55){
        leftArrowSlide.style.boxShadow= 'inset 5px 5px white';
        rightArrowFooter.style.boxShadow ='inset 5px 5px white';
    }
    firstDivslideFooter.style.marginLeft=`-${sum}%`;
    console.log(`valor atual: ${sum}`)
}