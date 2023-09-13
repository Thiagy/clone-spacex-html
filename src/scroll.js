function scroll(){
    let distance_top = document.documentElement.scrollTop;

    let box_text = document.getElementsByClassName("box-text")
    let btn_white_border = document.getElementsByClassName("btn-white-border")
    let section_1 = document.getElementById("section-1")
    let down_arrow = document.getElementById("down-arrow")

    current_window = section_1.clientHeight

    if(distance_top > (0.8 * current_window)){
        box_text[0].style.gap=''
        btn_white_border[0].style.marginTop=0
        box_text[1].style.gap= '2vh'
        btn_white_border[1].style.marginTop=0

    }else if(distance_top < (0.20 * current_window)){
        box_text[0].style.gap='2vh'
        btn_white_border[0].style.marginTop=0
        box_text[1].style.gap=''
        btn_white_border[1].style.marginTop=''
    }

    if(distance_top > (1.8 * current_window)){
        box_text[1].style.gap=''
        btn_white_border[1].style.marginTop=''

        box_text[2].style.gap='2vh'
        btn_white_border[2].style.marginTop=0
    }else if(distance_top < (1.20 * current_window)){
        box_text[2].style.gap=''
        btn_white_border[2].style.marginTop=''
    }

    if(distance_top > (2.8 * current_window)){
        box_text[2].style.gap=''
        btn_white_border[2].style.marginTop=''
        box_text[3].style.gap='2vh'
        btn_white_border[3].style.marginTop=0
    }else if(distance_top < (2.20 * current_window)){
        box_text[3].style.gap=''
        btn_white_border[3].style.marginTop=''
    }

    if(distance_top > (3.8 * current_window)){
        box_text[3].style.gap=''
        btn_white_border[3].style.marginTop=''
        box_text[4].style.gap='2vh'
        btn_white_border[4].style.marginTop=0
        down_arrow.style.bottom='20vh'
        if(window_width<= 425){
            down_arrow.style.bottom='22vh'
        }
        
    }else if(distance_top < (3.20 * current_window)){
        box_text[4].style.gap=''
        btn_white_border[4].style.marginTop=''
        down_arrow.style.bottom=''
        if(window_width > 425){
            down_arrow.style.bottom=''
        }
    }
}

window.addEventListener('scroll', scroll)
setTimeout(function(){
    let box_text = document.getElementsByClassName("box-text")[0]
    let btn_white_border = document.getElementsByClassName("btn-white-border")[0]
    box_text.style.gap='2vh'
    btn_white_border.style.marginTop=0
}, 200)