import { Produtos } from "./Produtos.js";

export class Lanches extends Produtos {

  #ingredientes
  #categoria

  constructor(nome, preco, quantidade, ingredientes, categoria) {
    super(nome, preco, quantidade)
    this.#ingredientes = ingredientes;
    this.#categoria = categoria;
  }

  get ingredientes() {
    return this.#ingredientes;
  }

  set ingredientes(ingredientes) {
    this.#ingredientes = ingredientes;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

}