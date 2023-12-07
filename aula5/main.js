import { Lanches } from "./Lanches.js";
import { Estoque } from "./Estoque.js";

console.log(new Lanches(1, 'Lanche 2', 33, 'ingred', 'cat'))

Estoque.cadastrarProdutos('produto 1', 1, 11)
Estoque.cadastrarProdutos('produto 2', 2, 22)
Estoque.cadastrarProdutos('produto 3', 3, 33)

console.log(Estoque.produtos.length)

Estoque.deletarProduto(2)

console.log(Estoque.produtos.length)

const p1 = new Produtos('produto 100', 100, 100)
p1.id = 1

Estoque.atualizarProduto(p1)

console.log(p1)