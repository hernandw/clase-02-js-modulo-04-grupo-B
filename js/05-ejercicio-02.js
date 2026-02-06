/* 2️⃣ CuentaBancaria

🧱 Simula una cuenta bancaria. Crear una clase CuentaBancaria que permita:

guardar un saldo

depositar dinero

retirar dinero

consultar el saldo

Atributos

titular

saldo

Métodos

depositar(monto)

retirar(monto)

mostrarSaldo() */

class CuentaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto <= 0) {
      return "Deposite un monto valido";
    }
    this.saldo += monto;
    return "Deposito Exitoso";
  }

  retirar(monto) {
    if (monto > this.saldo) {
      return "Fondos Insuficientes";
    }

    this.saldo -= monto;
    return "Retiro Exitoso";
  }
  mostrarSaldo() {
    return `Saldo actual de ${this.titular} es: ${this.saldo}`;
  }
}

const cuenta1 = new CuentaBancaria("Dalila");

//console.log(cuenta1.mostrarSaldo())



//cuenta1.depositar(180);

console.log(cuenta1.mostrarSaldo())
//cuenta1.depositar(200);

/* console.log(cuenta1.retirar(280));


*/

console.log(cuenta1.retirar(200))
//console.log(cuenta1.mostrarSaldo())
