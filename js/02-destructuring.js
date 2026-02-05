const empleado = {
    nombre : "Juan",
    apellido: "Perez",
    cargo: "desarrollador",
    salario: 24000,
    Nacimiento: 1980
}

/* let nombre = empleado.nombre
let apellido = empleado.apellido
let nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto) */

//destructuring

empleado.nombre = "Paola"

console.log(empleado)

/* const {nombre, cargo, salario, Nacimiento, apellido} = empleado
let nombreCompleto = `${nombre} ${apellido} y su cargo es: ${cargo} y nació en ${Nacimiento}`
console.log(nombreCompleto) */

let usuario = "Claudia"


function saludar(){
    usuario = "Pedro"
    console.log(`hola como estas ${usuario}`)
}

saludar()

const numero = 10

/* 
console.log(numero)

numero = 50

console.log(numero) */