import { Lanches } from "./Lanches.js";
import { Estoque } from "./Estoque.js";
import { Produtos } from "./Produtos.js";
import { Bebidas } from "./Bebidas.js";
import { Carrinho } from "./Carrinho.js";

// console.log(new Lanches(1, 'Lanche 2', 33, 'ingred', 'cat'))

Estoque.cadastrarProdutos(new Lanches('Lanche 2', 22, 10, 'ingred', 'cat'))
Estoque.cadastrarProdutos(new Lanches('Lanche 3', 33, 20, 'ingred', 'cat'))
Estoque.cadastrarProdutos(new Bebidas('Bebida 99', 33, 30, 'categoria', 'embalagem'))

console.log(Estoque.produtos)

// Estoque.deletarProduto(2)

console.log(Estoque.produtos)

// const p1 = new Bebidas('Bebida 99', 88, 40, 'categoria', 'embalagem')
// p1.id = 2

// Estoque.atualizarProduto(p1)

// console.log(p1)

const c1 = new Carrinho('Cliente feliz')

c1.adicionarProduto(1, 2)
c1.adicionarProduto(2, 2)
console.log('Carrinho ')
console.log(c1.produtos)
// console.log(c1.calcularTotalCarrinho())
console.log('Estoque ')
console.log(Estoque.produtos)