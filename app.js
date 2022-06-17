
const container = document.querySelector('.container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const button = document.querySelector('#generate');
const newImg = document.createElement('img')
newImg.classList.add('pokemonimg')
const pokeNum = document.createElement('p')
pokeNum.classList.add('idtext')
const pokeInfo = document.createElement('p')
pokeInfo.classList.add('moreinfo')
let numOfPokemons = 0

button.addEventListener('click', function generatePokemon() {

        const randomNum = Math.floor(Math.random() * 899) + 1;
        
        newImg.src = `${baseURL}${randomNum}.png`
        pokeNum.innerText = `ID: ${randomNum}`
                
        pokeInfo.innerHTML = `<a href="https://www.google.com/search?q=pokemon+number+${randomNum}">
        <span>click here</span><br>
        for more information<br>
        about the pokemon
        </>`

        if (!container.contains(newImg)) {
                 container.appendChild(newImg)
                 container.appendChild(pokeNum)
                 container.appendChild(pokeInfo)
                 numOfPokemons++
                }

        if (numOfPokemons > 1){
                  container.removeChild(newImg)

        } 
        
})

