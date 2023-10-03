//Função que permite obter dados sobre os lançamentos de foguetes 
async function getlaunches(){

    let titleNumber1 = document.getElementById('titleNumber1')

    const launches = await fetch('https://api.spacexdata.com/v4/launches/').then(res=> res.json())
    
    titleNumber1.innerText= launches.length
}
//Função que permite obter dados sobre os lançamentos de foguetes 
async function getlandings(){
    
    let titleNumber2 = document.getElementById('titleNumber2')

    const landings = await fetch('https://api.spacexdata.com/v4/landpads').then(res=> res.json())

    titleNumber2.innerText= landings[0].launches.length
}
//Função que permite obter dados sobre os lançamentos de foguetes 
async function getreflights(){
    let titleNumber3 = document.getElementById('titleNumber3')

    const reflights = await fetch('https://api.spacexdata.com/v4/rockets').then(res=> res.json())

    titleNumber3.innerText= reflights[0].mass.kg
}
//Função que altera o css durante a rolagem da página
async function scroll(){
    let distance_top = document.documentElement.scrollTop;

    let section = document.querySelector('section')
    let number = document.querySelectorAll('.number')
    let boxTextMain = document.getElementById("box-text-main")
    let boxTextSecton2 = document.getElementById('box-text-secton-2')
    let box_text = document.getElementById('box-text')
    let text_merlin = document.getElementById('text-merlin')
    
    current_window = section.clientHeight

    if(distance_top > (0.45 * current_window)){
        boxTextSecton2.style.left='5%'

        for(let n = 0; n < number.length; n++){
            number[n].style.animation= 'spin 1.2s linear'
        }
    }else {
        boxTextSecton2.style.left=''
        boxTextMain.style.gap=0

        for(let n = 0; n < number.length; n++){
            number[n].style.animation= ''
        }
    }

    if(distance_top > (2.45 * current_window)){
        box_text.style.gap='3vh'

    }else {
        box_text.style.gap=''
    }

    if(distance_top > (3.45 * current_window)){
        text_merlin.style.left='3vh'

    }else {
        text_merlin.style.left=''
    }
    
}

window.addEventListener('scroll', scroll)

document.addEventListener('DOMContentLoaded', async ()=>{
    await getlaunches()
    await getlandings()
    await getreflights()
})

