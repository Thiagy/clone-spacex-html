//Função que permite a tags da homepage se aproximarem a medida em que rola a página
function scroll() {
    const distanceTop = document.documentElement.scrollTop;
    const section1 = document.getElementById("section-1");
    const boxText = document.querySelectorAll(".box-text");
    const btnWhiteBorder = document.querySelectorAll(".btn-white-border");
    const currentWindow = section1.clientHeight;

    const breakpoints = [0, 0.8, 1.8, 2.8, 3.8];
    const gapValue = '2vh';
    const marginTopValue = 0;

    for (let i = 0; i < breakpoints.length; i++) {
        if (distanceTop >= (breakpoints[i] * currentWindow)) {
            boxText[i].style.gap = gapValue;
            btnWhiteBorder[i].style.marginTop = marginTopValue;
        } else {
            boxText[i].style.gap = '';
            btnWhiteBorder[i].style.marginTop = '';
        }
    }
}

setTimeout(scroll, 200);
window.addEventListener('scroll', scroll);
