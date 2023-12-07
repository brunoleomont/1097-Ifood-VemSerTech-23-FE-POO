export class Produtos {
  #id
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  get id() {
    return this.#id
  }

  set id(novoId) {
    this.#id = novoId
  }
}