// Pruebas


// let numeros = [10, 15, 20, 25, 30, 35, 40, 45];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }
// console.log("-------------------------------------------------------------------")

// numeros.forEach(numero => console.log(numero * 2));

// console.log("-------------------------------------------------------------------")

// const sumas = (a, b) => a + b;
// console.log(sumas(1, 2));

// console.log("-------------------------------------------------------------------")

// numeros.forEach(numero => {
//     console.log(numero - 5);
// })


// EJERCICIOS ARRAYS PAGINA 44
//-----------------------------------------------------------------------------------------------

// let miLista =["Queso","Mantequilla","Cafe"];

// miLista.push("Pan");
// console.log(miLista);

// miLista.pop();
// console.log(miLista);

// let miArray = [["Uno", "Dos", "Tres"], ["Agua"], ["Rojo", "Verde", "Azul"], ["Hola", "Adios"]]

// miArray.forEach((lista, index) => {
//     if (index == 0) {

//         console.log(lista)
//         lista.forEach(listarPrimerArray => console.log(listarPrimerArray))
        
//         lista.forEach((jugarDentroPrimerArray,indice) => {
//             if (jugarDentroPrimerArray == "Dos") {
//                 console.log("Te imprimo el numero 2 -> " + jugarDentroPrimerArray," <- Que estaba en la posicion ",indice)

//             }

//         }
//         )
//     } else if (index == 1) {
//         console.log("- Quiere agua? " + lista, index)
//         console.log("- No quiero agua")
//     }
// })

let numeros = [4,7,10,13,16,9];
let pares = [];

numeros.forEach(numero => {
    if(numero % 2 ==0){

        pares.push(numero);

    }
});

console.log(pares)

let porTres = pares.map(par => par*3)

console.log(porTres)
