/* const empleado = {
    nombre : "Juan",
    apellido: "Perez",
    cargo: "desarrollador",
    salario: 24000,
    nacimiento: 1980
} */

class Empleado {
constructor(nombre, apellido, cargo, salario, nacimiento){
    this.nombre = nombre
    this.apellido = apellido
    this.cargo = cargo
    this.salario = salario
    this.nacimiento = nacimiento
}

calcularEdad(){
let anio_actual = new Date().getFullYear()
    return anio_actual - this.nacimiento
}

crearEmail(){
    let email = (this.nombre + "." + this.apellido + "@empresa.com").toLowerCase()
    return email 
}
info(){
    return `
    Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Email: ${this.crearEmail()}
    Edad: ${this.calcularEdad()}
    Cargo: ${this.cargo}
    Salario: ${this.salario}


    `

}



}

let empleado2 = new Empleado("Arly", "Candia", "Diseñadora", 24000, 2000 )
let empleado3 = new Empleado("Claudia", "Cofré", "Desarrolladora", 30000, 1998 )

console.log(empleado3.info())
//console.log(empleado3)

//
