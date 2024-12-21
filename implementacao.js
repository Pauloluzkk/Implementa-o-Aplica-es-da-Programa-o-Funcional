const produtos = [
    { nome: "Produto A", preco: 50, emPromocao: true },
    { nome: "Produto B", preco: 30, emPromocao: false },
    { nome: "Produto C", preco: 20, emPromocao: true },
    { nome: "Produto D", preco: 100, emPromocao: false },
];

const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    preco: produto.preco * 0.9, 
}));

console.log("Produtos com desconto:");
console.log(produtosComDesconto);

const produtosEmPromocao = produtosComDesconto.filter(produto => produto.emPromocao);

console.log("Produtos em promoção:");
console.log(produtosEmPromocao);


const totalVendas = produtosComDesconto.reduce((soma, produto) => soma + produto.preco, 0);

console.log("Total potencial de vendas:");
console.log(totalVendas);

// Este script utiliza as funções map, filter e reduce para:
// - Transformar a lista de produtos aplicando descontos (map).
// - Filtrar apenas os produtos em promoção (filter).
// - Calcular o total potencial de vendas (reduce).
// A abordagem funcional torna o código mais legível e reutilizável, facilitando a manutenção.
