async function openVideo(){
    let video = document.getElementById('section-video-ocult')
    video.style.bottom=0
    
}
async function closeVideo(){
    let video = document.getElementById('section-video-ocult')
    video.style.bottom='200%'
    await res()
    video.style.display='none'
    await res()
    video.style.bottom=''
    video.style.display='flex'
}

async function res(){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(1);
        }, 500);
      });
}