var num = 2

async function openVideo(option){
    let video = document.getElementById('section-video-ocult')
    let frameSlide = document.getElementById('frame-slide')
    num++
    video.style.bottom=0
    if(num%2==0){
      video.style.bottom='200%'
      await res()
      video.style.display='none'
      await res()
      video.style.bottom=''
      video.style.display='flex'
    }
    if(option===1){
      frameSlide.src='https://www.youtube.com/embed/A_sEusdoTIM'
    }
    if(option===2){
      frameSlide.src='https://www.youtube.com/embed/TeVbYCIFVa8'
    }
    if(option===3){
      frameSlide.src='https://www.youtube.com/embed/oTH3mq7SsK4'
    }
    if(option===4){
      frameSlide.src='https://www.youtube.com/embed/FMi_m9-e9MU'
    }
    if(option===5){
      frameSlide.src='https://www.youtube.com/embed/KQBVOQ79G2s'
    }
}

async function res(){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(1);
        }, 500);
      });
}