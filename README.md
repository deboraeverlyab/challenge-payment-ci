# Desafio Login

Projeto desenvolvido para o desafio da disciplina Programação para Automação de Testes, utilizando JavaScript e testes automatizados com Mocha.

## Orientações

Declarar um vetor contendo informações sobre usuários de um site, com as propriedades:

- id
- nome
- email
- senha
- expirado (booleano: true ou false)

Ao menos um dos usuários deve possuir a propriedade `expirado` como `true`.


## Desafio

Construir uma função para realizar login.

A função deverá:

- Retornar uma mensagem de sucesso caso exista um usuário com email e senha válidos;
- Informar que as credenciais expiraram caso `expirado` seja `true`;
- Informar que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele usuário.


## Testes

Escrever 4 testes automatizados para os seguintes cenários:

1. Login realizado com sucesso;
2. Credencial expirada;
3. Usuário não encontrado;
4. Senha incorreta para o usuário encontrado.


## Exemplo


```javascript
fazerLogin('email@existente.com', 'senhaCerta123');
// Retorno:
// Login realizado com sucesso

fazerLogin('credencial@expirada.com', 'senhaCerta123');
// Retorno:
// Renove suas credenciais
```

---

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Mocha

---

## Estrutura do Projeto

```bash
desafio-login-mocha/
│
├── src/
│   └── login.js
│
├── test/
│   └── login.test.js
│
├── package.json
└── README.md
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/deboraeverlyab/challenge-login-pgats.git
```

Acesse a pasta do projeto:

```bash
cd challenge-login-pgats
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