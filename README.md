# Trabalho de Conclusão de Disciplina - Integração Contínua para Automação de Testes

Este repositório contém a solução desenvolvida para a disciplina **Integração Contínua para Automação de Testes**, com o objetivo de aplicar conceitos de **CI/CD utilizando GitHub Actions** em um projeto de testes automatizados desenvolvido em JavaScript.

O projeto reutiliza a classe **ServicoDePagamento**, criada anteriormente na disciplina **Programação para Automação de Testes**, adicionando uma esteira de integração contínua completa.

---

# Objetivo

Implementar uma pipeline de integração contínua capaz de:

* Executar testes automaticamente via **push**;
* Permitir execução manual da pipeline;
* Executar testes em horários programados;
* Gerar relatórios de testes;
* Publicar os relatórios como artefatos do GitHub Actions;
* Documentar toda a solução e os conceitos utilizados.

---

# Regras de Negócio

A classe `ServicoDePagamento` armazena pagamentos em uma lista interna.

Cada pagamento possui:

* `codigoBarras`
* `empresa`
* `valor`
* `categoria`

A categoria é definida como:

| Valor | Categoria |
| ----- | --------- |
| > 100 | `cara`    |
| ≤ 100 | `padrão`  |

### Métodos disponíveis

```javascript
pagar(codigoBarras, empresa, valor)

consultarUltimoPagamento()
```

---

# Cenários de Teste

Os testes automatizados cobrem os seguintes cenários:

1. Pagamento acima de R$100 recebe categoria **"cara"**;
2. Pagamento igual a R$100 recebe categoria **"padrão"**;
3. Pagamento abaixo de R$100 recebe categoria **"padrão"**;
4. Retorno correto do último pagamento após múltiplos registros;
5. Validação das propriedades do objeto retornado.

---

# CI/CD com GitHub Actions

Foram criados três workflows na pasta `.github/workflows/`.

## 01-manual-exec.yaml

Execução manual através do gatilho:

```yaml
workflow_dispatch
```

Permite iniciar a pipeline diretamente pela aba **Actions** do GitHub.

---

## 02-scheduled-exec.yaml

Execução agendada utilizando:

```yaml
schedule:
  - cron: '0 8 * * *'
```

Executa diariamente às **08:00 UTC** (05:00 horário de Brasília).

---

## 03-post-deploy-exec.yaml

Execução automática através do gatilho:

```yaml
push
```

Monitorando as branches:

* `main`
* `master`

Sempre que houver um push, os testes são executados automaticamente.

---

# Relatórios de Teste

Os testes utilizam:

* **Mocha**
* **mocha-junit-reporter**

Ao final da execução é gerado o arquivo:

```text
test-results.xml
```

Esse relatório é publicado como artefato do GitHub Actions e pode ser baixado diretamente pela interface do GitHub.

---

# Tecnologias Utilizadas

| Tecnologia           | Finalidade               |
| -------------------- | ------------------------ |
| Node.js 22           | Runtime                  |
| JavaScript           | Linguagem                |
| Mocha                | Framework de testes      |
| mocha-junit-reporter | Geração do relatório XML |
| GitHub Actions       | Integração contínua      |

---

# Estrutura do Projeto

```text
challenge-payment-pgats
│
├── .github
│   └── workflows
│       ├── 01-manual-exec.yaml
│       ├── 02-scheduled-exec.yaml
│       └── 03-post-deploy-exec.yaml
│
├── src
│   └── pagamento.js
│
├── test
│   └── pagamento.test.js
│
├── package.json
└── README.md
```

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/deboraeverlyab/challenge-payment-pgats.git
```

Entre na pasta:

```bash
cd challenge-payment-pgats
```

Instale as dependências:

```bash
npm install
```

---

# Executando os Testes

### Execução padrão

```bash
npm test
```

### Execução para CI (gera relatório XML)

```bash
npm run test:ci
```

---

# Como Executar as Pipelines

## Execução Manual

1. Acesse a aba **Actions** no GitHub;
2. Selecione o workflow **01-manual-exec**;
3. Clique em **Run workflow**;
4. Escolha a branch desejada e execute.

## Execução Agendada

O workflow **02-scheduled-exec** é executado automaticamente todos os dias às **08:00 UTC**, sem necessidade de intervenção manual.

## Execução Automática por Push

O workflow **03-post-deploy-exec** é disparado automaticamente sempre que ocorrer um `push` nas branches:

* `main`
* `master`

---

# Como Baixar o Relatório da Pipeline

Após uma execução bem-sucedida:

1. Acesse a aba **Actions** no GitHub;
2. Selecione a execução desejada;
3. Role até a seção **Artifacts**;
4. Baixe o arquivo contendo:

```text
test-results.xml
```

---

# Conceitos Aplicados

* Integração Contínua (CI);
* GitHub Actions;
* Workflow;
* Trigger por Push;
* Trigger Agendado (Schedule);
* Workflow Dispatch;
* Artefatos (Artifacts);
* Testes Automatizados;
* Mocha;
* Relatórios JUnit XML.

---

# Autor

**Débora Everly**

Quality Assurance

LinkedIn: https://www.linkedin.com/in/debora-everly/
