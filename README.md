# Manipulação de Produtos com Programação Funcional

Este repositório contém um script em JavaScript que utiliza os conceitos de **programação funcional** para resolver um problema comum em sistemas de gestão de vendas. O código demonstra o uso das funções **map**, **filter** e **reduce** para manipular listas de produtos, aplicando transformações, filtros e agregando informações.

---

## Problema a Ser Resolvido

Um sistema de gestão de vendas precisa realizar três operações principais sobre uma lista de produtos:

1. **Aplicar um desconto de 10% em todos os produtos**:
   - Calcular o novo preço dos produtos e gerar uma lista atualizada.

2. **Selecionar apenas os produtos em promoção**:
   - Criar uma lista filtrada para exibição ao cliente.

3. **Calcular o total potencial de vendas**:
   - Somar os preços dos produtos, considerando os descontos aplicados.

Essas operações simulam cenários comuns em lojas virtuais e sistemas de relatórios comerciais, onde é necessário manipular dados rapidamente e garantir legibilidade do código.

---

## Funcionalidades do Script

O script opera sobre uma lista de produtos com os seguintes atributos:
- **nome**: o nome do produto.
- **preco**: o preço original do produto.
- **emPromocao**: booleano indicando se o produto está em promoção.

### 1. Aplicar Desconto com `map`
A função **map** é usada para gerar uma nova lista de produtos com os preços reduzidos em 10%:
```javascript
const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    preco: produto.preco * 0.9,
}));
```

### 2. Filtrar Produtos em Promoção com `filter`
A função **filter** é usada para selecionar os produtos marcados como "em promoção":
```javascript
const produtosEmPromocao = produtosComDesconto.filter(produto => produto.emPromocao);
```

### 3. Calcular o Total com `reduce`
A função **reduce** é usada para somar os preços de todos os produtos, calculando o total potencial de vendas:
```javascript
const totalVendas = produtosComDesconto.reduce((soma, produto) => soma + produto.preco, 0);
```

---

## Vantagens da Implementação Funcional

1. **Legibilidade**:
   - O uso de **map**, **filter** e **reduce** torna o código mais conciso e expressivo.
   - As operações são descritas de forma declarativa, facilitando a compreensão.

2. **Imutabilidade**:
   - O código não altera a lista original de produtos, criando sempre novas listas para cada operação.

3. **Reutilização de Funções**:
   - As funções usadas em **map**, **filter** e **reduce** podem ser facilmente reutilizadas ou combinadas.

4. **Facilidade de Teste e Manutenção**:
   - Cada função tem uma responsabilidade clara, o que simplifica testes unitários e ajustes futuros.

---

## Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu computador.
2. Baixe ou clone este repositório.
3. Execute o arquivo `script.js` com o comando:
   ```bash
   node script.js
   ```

---

## Exemplo de Saída
Dada a lista de produtos inicial:
```javascript
[
    { nome: "Produto A", preco: 50, emPromocao: true },
    { nome: "Produto B", preco: 30, emPromocao: false },
    { nome: "Produto C", preco: 20, emPromocao: true },
    { nome: "Produto D", preco: 100, emPromocao: false },
]
```

### Resultado Final:
- Produtos com desconto:
  ```
  [
    { nome: 'Produto A', preco: 45, emPromocao: true },
    { nome: 'Produto B', preco: 27, emPromocao: false },
    { nome: 'Produto C', preco: 18, emPromocao: true },
    { nome: 'Produto D', preco: 90, emPromocao: false }
  ]
  ```
- Produtos em promoção:
  ```
  [
    { nome: 'Produto A', preco: 45, emPromocao: true },
    { nome: 'Produto C', preco: 18, emPromocao: true }
  ]
  ```
- Total potencial de vendas:
  ```
  180
  ```

---

## Licença
Este projeto é licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

