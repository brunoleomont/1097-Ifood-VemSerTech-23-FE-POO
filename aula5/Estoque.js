import { Produtos } from "./Produtos.js";

export class Estoque {
    static #produtos = [];
    static ids = 0;
    constructor() { }
    static cadastrarProdutos(produto) {
        // const p = new Produtos(
        //     produto.nome,
        //     produto.qtd,
        //     produto.preco);
        // p.id = ++Estoque.ids;
        Estoque.produtos.push(produto);
    }
    static deletarProduto(produtoId) {
        this.#produtos = Estoque.produtos.filter(
            (produto) => produto.id != produtoId
            );
    }
    static atualizarProduto(novoProduto) {
        this.#produtos.slice(novoProduto.id-1, 1);
        this.#produtos[novoProduto.id-1] = novoProduto;
    }
    static get produtos() {
        return this.#produtos;
    }
}