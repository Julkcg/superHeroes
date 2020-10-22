//JSON

// [{
//     "nombres": ["Julian", "Elias", "Claudia"]
// },
// {"nombres": ["Julian", "Elias", "Claudia"]},
// {"nombres": ["Julian", "Elias", "Claudia"]},
// {"nombres": ["Julian", "Elias", "Claudia"]},
// {"nombres": ["Julian", "Elias", "Claudia"]}
// ]

// prettier
// bracket pair colorizer

//object literal

// const persona1 ={
//     nombre: "Julian",
//     apellido: "Cano"
// }

//object constructor - ES5

// class Persona {
//     constructor(nombre, apellido) {
//         this.nombre = nombre
//         this.apellido = apellido
//     }
// }

// const persona1 = new Persona("Julian", "Cano");
// const persona2 = new Persona("Elias", "Cano");

// console.log(persona1)
// console.log(persona2)


//Ajax con XMLHttpRequest
// let request = new XMLHttpRequest();

// request.open('GET','https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

// request.responseType = 'json';
// request.send();

// request.onload = function(){
//     let respuesta = request.response;
//     mostrarSuperHeroes(respuesta);
    
// }

// function mostrarSuperHeroes(superHeroes){
//     document.querySelector("#super1").textContent = superHeroes.members[2].name;
//     document.querySelector("#super2").textContent = superHeroes.members[1].name;
// }

//AJAX con fetch

// function peticion(){
//     fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
//     .then(function(response){
//     return response.json();
// })
//     .then(function(respuesta){
//     mostrarSuperHeroes(respuesta)
// })
// }

// let btn_cargar = document.querySelector("#btn-cargar")
// btn_cargar.addEventListener("click", peticion)

function mostrarSuperHeroes(superHeroes){

    //Molecula man
    document.querySelector("#identidadSecreta1").textContent = superHeroes.members[0].secretIdentity;
    document.querySelector("#edad1").textContent = superHeroes.members[0].age;
    document.querySelector("#superpoderes1").textContent = superHeroes.members[0].powers;

    //Madame Uppercut
    document.querySelector("#identidadSecreta2").textContent = superHeroes.members[1].secretIdentity;
    document.querySelector("#edad2").textContent = superHeroes.members[1].age;
    document.querySelector("#superpoderes2").textContent = superHeroes.members[1].powers;

    //Eternal Flame
    document.querySelector("#identidadSecreta3").textContent = superHeroes.members[2].secretIdentity;
    document.querySelector("#edad3").textContent = superHeroes.members[2].age;
    document.querySelector("#superpoderes3").textContent = superHeroes.members[2].powers;
    
}function peticionSuperHeroes(){
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then(function(response){
    return response.json();
})
    .then(function(respuesta){
    mostrarSuperHeroes(respuesta)
})
}

let btn_send = document.querySelector(".btn-warning")
btn_send.addEventListener("click", peticionSuperHeroes)


