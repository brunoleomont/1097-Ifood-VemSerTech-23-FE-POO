class MathUtils {
  constructor(){}
  static PI() {
    return 3.14
  }

  static sum(n1, n2) {
    return n1 + n2;
  }
}

const m = new MathUtils();

console.log(MathUtils.PI());
console.log(MathUtils.sum(2, 5));

class Pessoa {
  static cadastrados = 0;
  #nome
  #idade
  #peso
  #altura
  constructor(nome, idade, peso, altura){
    this.#nome = nome
    this.#idade = idade
    this.#peso = peso
    this.#altura = altura
    Pessoa.cadastrados++
  }

  get nome(){
    return this.#nome
  }

  set nome(nome) {
    this.#nome = nome
  }

  get idade(){
    return this.#idade
  }

  set idade(idade) {
    if(isNaN(idade)) {
      console.log('Idade precisa ser um número')
      return
    }
    this.#idade = idade;
  }

  #calcularIMC() {
    return this.#peso / (this.#altura * this.#altura)
  }

  imprimir() {
    return `Olá ${this.#nome}, seu IMC é ${this.#calcularIMC()}`
  }
}

const p1 = new Pessoa('Bruno', 26, 69, 1.79)
const p2 = new Pessoa('Fulano')
const p4 = new Pessoa('José')

console.log(Pessoa.cadastrados)

console.log(p1.nome = 'José')
console.log(p1.nome)

p1.idade = 25

console.log(p1.imprimir())

