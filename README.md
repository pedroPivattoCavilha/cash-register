# Caixa Registradora
Implemente uma função de caixa registradora checkCashRegister() que aceita o preço de compra como o primeiro argumento (price), pagamento como o segundo argumento (cash) e dinheiro na registradora (cid) como o terceiro argumento.

cid é um array de duas dimensões listando a moeda disponível e a quantidade.

A função checkCashRegister() deve sempre retornar um objeto com a chave status e uma chave change.

Retorne {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no caixa for menor que o troco devido, ou se você não pode retornar o troco exato.

Retorne {status: "CLOSED", change: [...]} com dinheiro no caixa como o valor para a chave change se for igual ao troco devido.

Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, ordenado do maior para o menor, como o valor da chave change.
## Linguagem
JavaScript
## Conteúdos abordados
- Manipulação de arrays
- Funções
- Lógica de programação
