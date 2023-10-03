//Função que permite subir um video para vizualização
async function toggleVideo(isOpen) {

  const video = document.getElementById('section-video-ocult');
  
  if (isOpen) {
      video.style.bottom = 0;
      await sleep(500); 
      video.style.display = 'flex';
  } else {
      video.style.bottom = '200%';
      await sleep(500); 
      video.style.display = 'none';
  }
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
