# Desafio Pagamento

Projeto desenvolvido para o desafio da disciplina Programação para Automação de Testes, utilizando JavaScript e testes automatizados com Mocha.

## Orientações

Criar uma classe `ServicoDePagamento` com os seguintes comportamentos:

- Armazenar pagamentos como objetos JavaScript em uma lista interna;
- Cada pagamento deve conter as propriedades: `codigoBarras`, `empresa`, `valor` e `categoria`;
- A `categoria` deve ser `'cara'` quando o valor for maior que `100.00`, e `'padrão'` caso contrário.


## Desafio

Implementar a classe com dois métodos:

- `pagar(codigoBarras, empresa, valor)`: realiza o pagamento e o armazena na lista;
- `consultarUltimoPagamento()`: retorna apenas o último pagamento realizado.


## Testes

Escrever testes automatizados para os seguintes cenários:

1. Pagamento com valor acima de 100 recebe categoria `'cara'`;
2. Pagamento com valor igual a 100 recebe categoria `'padrão'`;
3. Pagamento com valor abaixo de 100 recebe categoria `'padrão'`;
4. `consultarUltimoPagamento` retorna apenas o último pagamento após múltiplos pagamentos;
5. O objeto de pagamento retornado possui as propriedades `codigoBarras`, `empresa`, `valor` e `categoria`.


## Exemplo

```javascript
const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
console.log(servicoDePagamento.consultarUltimoPagamento());
// Retorno:
// {
//   codigoBarras: '0987-7656-3475',
//   empresa: 'Samar',
//   valor: 156.87,
//   categoria: 'cara'
// }
```

---

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Mocha

---

## Estrutura do Projeto

```bash
challenge-payment-pgats/
│
├── src/
│   └── pagamento.js
│
├── test/
│   └── pagamento.test.js
│
├── package.json
└── README.md
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/deboraeverlyab/challenge-payment-pgats.git
```

Acesse a pasta do projeto:

```bash
cd challenge-payment-pgats
```

Instale as dependências:

```bash
npm install
```

## Executando os Testes

```bash
npm test
```

---

## Autor

Débora Everly  
Quality Assurance

[LinkedIn](https://www.linkedin.com/in/debora-everly/)
