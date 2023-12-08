import { Produtos } from "./Produtos.js";

export class Bebidas extends Produtos {
    constructor(nome, preco, quantidade, categoria, embalagem){
        super(nome, preco, quantidade)
        this.categoria = categoria
        this.embalagem = embalagem;
    }
}