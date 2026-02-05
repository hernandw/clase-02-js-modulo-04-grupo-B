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

const {nombre, cargo, salario, Nacimiento, apellido} = empleado
let nombreCompleto = `${nombre} ${apellido} y su cargo es: ${cargo} y nació en ${Nacimiento}`
console.log(nombreCompleto)

