class Animal {
    constructor(nome) {
        this.nome = nome
    }
    emitirSom() {
        return "Algum barulho"
    }
  }
  
  class Gato extends Animal {
    constructor(nome) {
        super(nome)
    }
    emitirSom(){
      return "Miau"
    }
  }
  
  const g1 = new Gato("Garfield")
  
  console.log(g1.emitirSom())
  
  class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    calcularImposto(valor){
      return valor
    }
  }
  
  class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome)
        this.cpf = cpf
    }
    calcularImposto(salario){
      return salario * 0.10
    }
  }
  
  class PessoaJurica extends Pessoa {
    constructor(nome, cnpj) {
        super(nome)
        this.cnpj = cnpj
    }
    calcularImposto(faturamento){
      return faturamento * 0.30
    }
  }
  
  const p1 = new PessoaFisica("Fulano")
  console.log(p1.calcularImposto(100))
  
  const pj = new PessoaJurica("Empresa 12")
  console.log(pj.calcularImposto(100))