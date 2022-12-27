const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
const slide = document.querySelectorAll('.image')
const dotContainer = document.querySelector('.dots-con')

//create dot for slide
function createDot(){
    slide.forEach((_,i)=>{
        document.querySelector('.dots-con').insertAdjacentHTML('beforeend',`<div class="dot" data-slide="${i}"></div>`)
    })
}

//activate dots during slide
function activateDot(slideNum){
    //remove active class from all the dots
    document.querySelectorAll('.dot').forEach((dot)=>{
        dot.classList.remove('dot-active')
    })

    //add active class to specific dot
    document.querySelector(`.dot[data-slide="${slideNum}"]`).classList.add('dot-active')
}

//change slide
let currentSlide = 0
const maxSlide = slide.length

function slideSide(curr){
    slide.forEach((img, i)=>{
        img.style.transform = `translateX(${(i-curr) * 100}%)`
    })
}

//initial function
function init(){
    createDot()
    activateDot(0)
    slideSide(0)
}
init()


//next slide functionality
function nextSlide(){
    if(currentSlide === maxSlide-1){
        currentSlide = 0
    } else{
        currentSlide++
    }
    slideSide(currentSlide)
    activateDot(currentSlide)
}

//previous slide functionality
function previousSlide(){
    if(currentSlide === 0){
        currentSlide = maxSlide -1
    } else{
        currentSlide--
    }
    slideSide(currentSlide)
    activateDot(currentSlide)
}

//event listeners
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', previousSlide)

dotContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('dot')){
        const currDot = e.target.dataset.slide
        slideSide(currDot)
        activateDot(currDot)
    }
})

//keyboard arrow to slide
document.addEventListener('keydown',(e)=>{
    e.key=='ArrowRight' && nextSlide()
    e.key == 'ArrowLeft' && previousSlide()
})