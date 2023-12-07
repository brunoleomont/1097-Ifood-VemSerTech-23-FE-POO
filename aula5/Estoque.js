import { Produtos } from "./Produtos";

export class Estoque {
    static #produtos = [];
    static ids = 0;
    constructor() { }
    static cadastrarProdutos(nome, qtd, preco) {
        const p = new Produtos(
            nome,
            qtd,
            preco);
        p.id = ++Estoque.ids;
        Estoque.produtos.push(p);
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