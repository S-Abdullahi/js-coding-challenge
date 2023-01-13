'use strict';

const body = document.querySelector('body');
function renderCountry(data, neighbour=''){
    let html = `
            <div class="card ${neighbour}">
            <div class="card__image-con">   
                <img src="${data.flags.png}" alt="" class="card__image">
            </div>
            <div class="card__detail-con">
                <h2 class="card__country">${data.name.common}</h2>
                <span class="card__continent">${data.region}</span>
                <div class="card__detail">
                    <span>🧑🏻‍🤝‍🧑🏿</span>
                    <span>${(data.population/1000000).toFixed(1)} people</span>
                </div>
                <div class="card__detail">
                    <span>🗣️</span>
                    <span>${data.capital[0]}</span>
                </div>
                <div class="card__detail">
                    <span>💰</span>
                    <span>${data.currencies.EUR.name}</span>
                </div>
            </div>
            
        </div>
    `
    body.insertAdjacentHTML('beforeend', html)

}


function renderError(message){
    body.insertAdjacentHTML('beforeend',message)
}

function getData(url, errorMessage){
    return fetch(url).then(response =>{
        if(!response.ok) throw new Error(`${errorMessage} ${response.status}`)
        return response.json()
    })

}


// function getCountry(country){
//     getData(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
//     // const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    
//     // request.then(response=>{
//     //     if(!response.ok) throw new Error(`Country not found - ${response.status}`)
//     //     return response.json()
//     // })
//     .then(data=>{
//         renderCountry(data[0])

//         getData(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`,'No neighbour found')
//         // return fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)
//         //     }).then(response =>{
//         //         console.log(response)
//         //         if(!response.ok) throw new Error(`No neighbor found ${response.status}`)
//         //         return response.json()
//             })
//             .then(data=> renderCountry(data[0],'neighbor'))
//             .catch(error =>{
//                 renderError(`OOPPPSSS!!! something went wrong: ${error.message} `)
//             })
                
// }
// getCountry('belgium')


//asynchronous challenge one
function getJSON(url, errorMessage){
   return fetch(url).then(response =>{
    console.log(response)
    if(!response.ok) throw new Error(`${errorMessage}: ${response.status}`)
    return response.json()
   })
}

function whereAmI(lng, lat){
    //https://geocode.xyz/51.50354,-0.12768?geoit=xml auth=your_api_key
    getJSON(`https://geocode.xyz/${lng},${lat}?geoit=json&auth=622255700551578397x91426`)
    .then(data => {
        console.log(data)
        console.log(`you are in ${data.city}, ${data.prov}`)

        return fetch(`https://restcountries.com/v3.1/name/nigeria`)
    }).then(response =>{
        console.log(response)
        if(!response.ok) throw new Error('country not found')
        return response.json()
    } )
    .then(data=> {
        renderCountry(data[0])
    }
        )
    .catch(error => console.error(`Something went wrong ${error.message}`))
}

whereAmI(8.2, 3.9)


//promise
const lottery = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()*10 > 5){
            resolve('I won')
        } else{
            reject('you lose')
        }
    },2000)
   
})

lottery.then((res)=>{
    console.log(res)
}).catch(error=>console.log(error))

const wait = function(seconds){
    return new Promise((resolve)=>{
        setTimeout(resolve, seconds)
    })
}

wait(2).then(()=>{
    console.log('I waited for 2 seconds')
    return wait(1)
}).then(()=>{
    console.log('I waited for 2 seconds')
})


const getLocation = function(){
    return new Promise((resolve, reject) =>{
    navigator.geolocation.getCurrentPosition((position)=>{
        resolve(position)
    },(error)=>{
        reject(error)
    })
})
}

getLocation().then(res=>{
    const {latitude, longitude} = res.coords
    console.log(latitude, longitude)
})

//coding challenge 2
const imageWait = function(seconds){
    return new Promise((resolve)=>{
        setTimeout(resolve, seconds*1000)
    })
}
const imageCon = document.querySelector('.image-con')
function createImage(imgPath){
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img')
        img.src = imgPath
        img.addEventListener('load',()=>{
            imageCon.append(img)
            resolve(img)
        })

        img.addEventListener('error',()=>{
            reject(new Error('image not found'))
        })

    })
}

let currentImage
createImage('img/img-1.jpg').then(res =>{
    currentImage = res
    console.log(res)
    return imageWait(3 )
}).then((()=>{
    currentImage.style.display = 'none'
    return createImage('img/img-2.jpg')
})).then((res)=>{
    currentImage = res
    return imageWait(3)
}).then(()=>{
    currentImage.style.display ='none'
    return createImage('img/img-3.jpg')
}).catch(err=>console.error(err))