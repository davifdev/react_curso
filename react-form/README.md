# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Formulários com React

## Trabalhando com formulários

**Toda aplicação que tiver um backend envolvido a gente vai criar um formulário para enviar dados para o servidor;**

- No React vamos também utilizar a tag form para formulários;
- As labels dos inputs contém o atributo htmlFor, que deve ter o valor do name do input;
- Não utilizamos action, pois o processamento será feito de forma assíncrona;

# Label envolvendo o input

- Em React um padrão comum é a tag label envolvendo o input;
- Isso faz com que o atributo for se torne opcional;
- Simplificando nossa estrutura de HTML, sem perder a semântica;

# Manipulação de valores

- Para manipular os valores dos inputs vamos utilizar o hook useState;
- Ou seja, podemos armazenar na variável e utilizar o set para alterar o valor;
- Vamos criar uma função para alterar o valor no evento onChange;
- Deixando nosso código fácil de trabalhar nas próximas etapas: como envio dos dados para BD e validação;

# Simplificando a manipulação

- Quando temos vários inputs podemos realizar a manipulação de forma mais simples;
- Basicamente criamos uma função inline no onChange;
- Ela vai alterar o valor do state com o método set, da mesma forma que a função isolada;

# Envio de formulário

- Para enviar um form vamos utilizar o evento onSubmit;
- Ele chamará a função,  e nesta devemos lembrar de parar a submissão com preventDefault;
- Nesta etapa podemos realizar validações, envio de form para o servidor, reset de form e outras ações;

# Controlled inputs

- Controlled inputs é um recurso que nos permite mais flexibilidade nos forms de React:
- Precissamos igualar o valor ao state;
- Um uso muito comum: formulários de edição, que os dados vem do back-end, conseguiremos preencher o input mais facilmente;
- Controlled: Você controla o estado;
- Uncontrolled: O própio input controla o estado;

# Limpando formulários

- Com o controller inputs limpar o form será fácil;
- Basta atribuir um valor de uma string vazia ao states e pronto!
- Isso será feito após o envio, em formulários que o usuário precisa preencher novamente;

# Input de Textarea

- O textarea pode ser considerado um input de texto normal;
- Utilizaremos o value para alterar o  state inicial;
- E o evento onChange para modificar o valor do state;

# Input de Select

- O select também será muito semelhante aos outros inputs;
- Quando temos a alteração de um valor o evento onChange pode captar isso;
- O value também pode atribuir qual option estará selecionada;
