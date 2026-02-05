let nombre = "Juan";

const numero = 10;

function sumar(a, b) {
  return a + b;
}

let sumar2 = (a, b) => a + b;

console.log(sumar(10, 15));

console.log(sumar2(20, 30));

let saludar = (nombre) => `Hola como estas ${nombre}`;

console.log(saludar("Juan"));
console.log(saludar("Dalila"));


const lenguajes = ["PHP", "Javascript", "C++", "C#", "Go", "Java"]

let lenguas = document.getElementById('lenguajes')

let valores = ""


lenguajes.forEach( (leng)=>{
    valores += `<li>El lenguaje es: ${leng}</li>`
})


lenguas.innerHTML = valores
