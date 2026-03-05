//ej  1
let puntos = [10, 8, 7];

// puntos.push(1,2);

// console.log(puntos);

// puntos.pop();

// console.log(puntos)

puntos.forEach((puntos, indice) => {
    console.log(`${indice}: ${puntos}`);
});

puntos.forEach(

    variable => {

        if (variable == 10) {
            return console.log("Puntuación: " + variable)
        }
        else {
            return "nanay"
        }

    }

)

// ej 2
let turnos = [10, 8, 7]

turnos.shift()
console.log(turnos)
turnos.unshift(20)
console.log(turnos)

turnos.forEach(x => console.log(x))

// ej 3

let dorsales = [4, 7, 9, 15, 20]

dorsales.splice(2,1,10000)

console.log(dorsales)

//4


let participantes = [1,2,3,4,5,6];


let x = participantes.slice(0,3);

console.log(x)

x.forEach (nombres => console.log(nombres))

// 5
let precios = [100, 200, 50, 80]

let nuevo =precios.map( precio => 
    precio-((precio * 10) /100)
)

console.log(nuevo)

//6

let niveles = [50, 20, 0, 80, 0, 60]

niveles.forEach( x => {
    if(x == 0){
        console.log("sin energia")
    }else if( x > 0){
        console.log("nivel activo")
    }
})

// 7

let numeros = [3,6,9,12];

let nuevoArray7 = numeros.map(numeros =>

    numeros*2

)

console.log(nuevoArray7)

// 8

let edades = [ 12, 18, 25, 16, 30]

let vacio = []

edades.forEach(edad => {
    if( edad >= 18){
        vacio.push(edad)
        console.log(vacio)
    }else{
        console.log("edad no valida")
    }
})

// 9

let stock = [5,3,8,2,9]
let nuebasListas = stock.slice(0,3)

nuebasListas.push(100)


nuebasListas.forEach(x =>
    console.log(x)
)

//10
let valores1 = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 39, 60];

valores1.forEach(x => {
    if(x % 3 == 0){
        return console.log("Fizz")
    }else if(x % 5 == 0){
        return console.log("Buzz")
    }else if(x % 2 == 0){
        return console.log("FIzz Buzz")
    }else{
        return console.log("No es nada")
    }
})


