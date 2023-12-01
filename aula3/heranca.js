class Veiculo {
  constructor(nome){
    this.nome = nome
  }
}

class VeiculoTerrestre extends Veiculo {
  constructor(nome, qtdRodas){
    super(nome)
    this.qtdRodas = qtdRodas
  }
}

class Carro extends VeiculoTerrestre {
  constructor(nome, qtdRodas, marca) {
    super(nome, qtdRodas)
    this.marca = marca
  }
}

class Barco extends Veiculo {
  constructor(nome, vela) {
    super(nome)
    this.velas = vela
  }
}

const c1 = new Carro("Camaro", 4)
const b1 = new Barco("Mercedes");

console.log(c1.qtdRodas)

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome)
        this.cpf = cpf
    }
}

class PessoaJurica extends Pessoa {
    constructor(nome, cnpj) {
        super(nome)
        this.cnpj = cnpj
    }
}

const empresa1 = new PessoaJurica("Ada", 123152345)