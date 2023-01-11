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

function getCountry(country){
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    
    request.then(response=>response.json())
            .then(data=>{
                renderCountry(data[0])
                console.log(data)

                return fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)
            }).then(response => response.json())
            .then(data=> renderCountry(data[0],'neighbor'))
                
}
getCountry('belgium')