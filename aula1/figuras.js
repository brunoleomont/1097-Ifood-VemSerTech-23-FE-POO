// Protótipo
class Quadrado {
  base
  altura
  cor
  constructor(base, altura, cor) {
    this.base = base
    this.altura = altura
    this.cor = cor || 'green'
  }
  calcularArea() {
    return this.base * this.altura
  }
  imprimir() {
    return `<div style='width:${this.base}px; height:${this.altura}px;
              background-color:${this.cor}'></div>`
  }
}

//Produção
const q1 = new Quadrado(100, 100, 'red')
const q2 = new Quadrado(500, 500)

console.log(q1.calcularArea())
console.log(q2.cor)

document.write(q2.imprimir())