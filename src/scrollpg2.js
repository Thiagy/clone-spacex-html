var lastScrollTop = 0

function scroll(){
    let distance_top = document.documentElement.scrollTop;

    let section = document.querySelector('section')
    let header = document.getElementById("header")
    let boxTextMain = document.getElementById("box-text-main")
    let boxTextSecton2 = document.getElementById('box-text-secton-2')
    
    current_window = section.clientHeight

    if(distance_top > lastScrollTop){
        header.style.opacity=0
    }else{
        header.style.opacity=''
    }
    lastScrollTop = distance_top

    if(distance_top >= 0){
        boxTextMain.style.gap=0
    }else {
        boxTextMain.style.gap=''
        
    }

    if(distance_top > (0.45 * current_window)){
        boxTextSecton2.style.left='5%'
        launches()
        landings()
        reflights()
    }else {
        boxTextSecton2.style.left=''
        boxTextSecton2.style.color='white'
        boxTextMain.style.gap=0
    }
    
}

window.addEventListener('scroll', scroll)


// Obter o número total de lançamentos


async function launches(){
    let titleNumber1 = document.getElementById('titleNumber1')
    const response = await fetch('https://api.spacexdata.com/v4/launches/').then(res=> res.json())
    
    titleNumber1.innerText= response.length
}

async function landings(){
    let titleNumber2 = document.getElementById('titleNumber2')
    const response = await fetch('https://api.spacexdata.com/v4/landpads').then(res=> res.json())

    titleNumber2.innerText= response[0].launches.length
    
}
async function reflights(){
    let titleNumber3 = document.getElementById('titleNumber3')
    const response = await fetch('https://api.spacexdata.com/v4/rockets').then(res=> res.json())

    titleNumber3.innerText= response[0].mass.kg
}

const body = document.body
body.addEventListener('loadedmetadata', function(){
    launches()
    landings()
    reflights()
})

