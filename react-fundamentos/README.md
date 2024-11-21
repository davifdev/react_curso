# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Fundamentos do React

# Criando componentes

- Na maioria dos projetos os componentes ficam em uma pasta chamada components, que devemos criar;
- Geralmente são nomeados com a camel case: FirstComponent.jsx;
- No arquivo criamos uma função, que contém o código deste componente (a lógica e o template);
- E também precissamos exporta esta função, para reutiliza-la;

---

# Importando componente

- A importação é a maneira que temos de reutilizar o componente;
- Utilizamos a sintaxe: import “xxx” from “./components/x” onde x é o nome do componente;
- Para colocar o componente importado em outro componente, precisamos colocá-lo em forma de tag: <FirstComponent />
- E então finalizamos o ciclo de importação;

---

# JSX

- JSX é o HTML do React;
- Onde nós vamos declarar as tags de HTML que serão exibidas no navegador;
- Ficam no return do componente;
- Temos algumas diferenças do HTML, por exemplo: class será  className;
- Isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é JavaScript, então algumas terão nomes diferentes;
- O JSX pode ter apenas um elemento pai;

---

# Comentários no componente

- Podemos inserir comentários de duas maneiras no componente;
- Na parte da função, onde é executada a lógica, a sintaxe é: // Comentário
- E também no JSX: { /* Comentário */}
- As chaves nos permitem executar sentenças em JavaScript, veremos isso mais adiante;

---

# Template Expressions

- Template Expression é o recurso que nos permite executar JS no JSX e também interpolar variáveis;
- Isso será muito útil ao longo dos seus projetos em React.JS;
- Tudo que está entre chaves é processado em JS e nos retorna um resultado;

---

# Hierarquia de componentes

- Os componentes que criamos podem ser reutilizados em vários componentes;
- E ainda componentes podem formar uma hierarquia, sendo importados uns dentro dos outros, como fizemos em App;

---

# Eventos

- Os eventos para o front-end são essenciais;
- Em várias situações vamos precisar do click, como ao enviar formulários;
- No React os eventos já estão ‘prontos’, podemos utilizar onClick para ativar uma função ao clicar em um elemento;
- Esta função é criada na própia função do componente;
- As funções geralmente tem o padrão handleAlgumaCoisa;
- Cada evento tem acesso a um elemento chamado event são os dados que o evento contém;

---

# Funções no evento

- Quando as funções são simples, podemos realizar a lógica no própio evento;
- Isso torna nosso código mais ‘complicado’, por atrelar lógica com HTML;
- Mas em algumas situações é aplicável;

---

# Funções de redenrização

- Podemos criar funções que retornam JSX;
- Isso serve para criar situações que dependam de outras condições;
- Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo;
