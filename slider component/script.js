const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')

const slide = document.querySelectorAll('.image')

let currentSlide = 0
const maxSlide = slide.length

function slideSide(curr){
    slide.forEach((img, i)=>{
        img.style.transform = `translateX(${(i-curr) * 100}%)`
    })
}

slideSide(0)

function nextSlide(){
    if(currentSlide === maxSlide-1){
        currentSlide = 0
    } else{
        currentSlide++
    }
    slideSide(currentSlide)
}

function previousSlide(){
    if(currentSlide === 0){
        currentSlide = maxSlide -1
    } else{
        currentSlide--
    }
    slideSide(currentSlide)
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', previousSlide)