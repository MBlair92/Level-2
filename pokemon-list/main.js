const xhr = new XMLHttpRequest()
//      method               url                  ansyc?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        //pass data to pokemonArray?
       // addPokemonData(data.objects[0].pokemon)
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
        console.log(typeof data)
        console.log(data)
        console.log(xhr.responseText)
    }
}
function showData(pokemon){
    for (let i = 0; i < pokemon.length; i++) {
    const h1 = document.createElement('h1')// create a new h1
    h1.textContent = pokemon[i].name // change h1 content to pokemon's name
    document.body.appendChild(h1)//append pokemon name to body
    }
}

// const xhr = new XMLHttpRequest()
//     //  (method,            url,                  async?)
// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data.objects[0].pokemon)
//         // const h1 = document.createElement('h1')
//         // h1.textContent = pokemon.name
//         // document.body.appendChild(h1)
//     } 
// }

// // function showData(pokemon){
// //     const h1 = document.createElement('h1')
// //     h1.textContent = pokemon.name
// //     document.body.appendChild(h1)
// console.log(showData())
// //     }
