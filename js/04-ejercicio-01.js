/* 🧱 Representa a una persona común.

Atributos sugeridos

nombre

apellido

anioNacimiento

Métodos

calcularEdad()

nombreCompleto()

info() */

class Persona {
    constructor(nombre, apellido, nacimiento){
        this.nombre = nombre
        this.apellido = apellido
        this.nacimiento = nacimiento

    }

    calcularEdad(){
        let anio_actual = new Date().getFullYear()
        return anio_actual - this.nacimiento
    }
nombreCompleto(){
    return `${this.nombre} ${this.apellido}`
}
info(){
    return `
Nombre Completo: ${this.nombreCompleto()}
Edad: ${this.calcularEdad()}

    }`
}

}

let persona1 = new Persona("Dalila", "Betancourt", 2000)

console.log(persona1.info())