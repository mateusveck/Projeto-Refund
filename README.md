# Refund - Sistema de Reembolso

Projeto desenvolvido para praticar HTML, CSS, Tailwind CSS e JavaScript, com foco em manipulação do DOM, validação de formulário, renderização dinâmica de itens e cálculo automático de despesas.

A aplicação permite cadastrar solicitações de reembolso informando título da despesa, categoria e valor. Cada despesa adicionada aparece em uma lista, com ícone correspondente à categoria, valor formatado em reais, contador de despesas e total atualizado automaticamente.

## Preview

![Preview do projeto](./assets/imgs/preview.png)

## Funcionalidades

* Cadastro de despesas
* Validação de campos obrigatórios
* Máscara de valor em tempo real no formato brasileiro
* Renderização dinâmica da lista de despesas
* Ícones diferentes por categoria
* Remoção de despesas individualmente
* Atualização automática da quantidade de despesas
* Cálculo automático do valor total
* Feedback visual em campos inválidos
* Layout baseado em design do Figma

## Tecnologias utilizadas

* HTML5
* CSS3
* Tailwind CSS
* JavaScript Vanilla
* Figma

## Aprendizados

Durante o desenvolvimento deste projeto, pratiquei conceitos importantes de JavaScript e front-end, como:

* Seleção de elementos com `querySelector`
* Eventos de formulário com `addEventListener`
* Prevenção do comportamento padrão com `preventDefault`
* Criação e manipulação de arrays de objetos
* Uso de `template` HTML para renderizar itens dinamicamente
* Manipulação de classes CSS pelo JavaScript
* Validação de inputs
* Formatação de valores monetários com `toLocaleString`
* Uso de `reduce` para somar valores
* Uso de `filter` para remover itens
* Organização da lógica em funções reutilizáveis

## Como executar o projeto

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd nome-do-repositorio
```

3. Abra o arquivo `index.html` no navegador.

Também é possível usar a extensão **Live Server** no VS Code para visualizar o projeto localmente.

## Estrutura do projeto

```bash
.
├── assets
│   ├── imgs
│   │   └── icons
│   └── script.js
├── index.html
├── style.css
└── README.md
```

## Layout

O layout foi baseado em um projeto do Figma Community, com adaptações feitas durante o desenvolvimento para praticar estruturação, estilização e lógica com JavaScript.

## Status do projeto

Projeto em desenvolvimento/refinamento.

Próximas melhorias possíveis:

* Mensagens de erro mais detalhadas
* Animação ao adicionar ou remover despesas
* Salvamento das despesas no `localStorage`
* Modo escuro
* Melhorias de acessibilidade

## Autor

Desenvolvido por Mateus.

[GitHub](https://github.com/mateusveck)
