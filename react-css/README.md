# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React com CSS

# CSS global

- O CSS global é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS;
- Utilizamos o arquivo index.css para isso;
- Ele está na pasta src;

# CSS de Componente

- O CSS de componente é utilizado para um componente especifico;
- Geralmente é criado um arquivo com o mesmo nome do componente e este é importado no componente;
- Note que este método não é scoped, ou seja o CSS vaza para outros componentes se houver uma regra de colisão;
- O React já cria um exemplo desta técnica com o App.css/js

# Inline style

- O inline style do React é igual o do CSS;
- Por meio do atributo style conseguimos aplicar regras diretamente em um elemento;
- Devemos optar por outras maneiras de CSS, o inline pode dificultar a manutenção ou deixar o código imprevisivel em algumas situações;

# Inline style Dinâmico

- O CSS dinâmico inline aplica estilo baseado em uma condicional;
- Vamos inserir no atributo um if ternário;
- Dependendo da condição podemos mudar que regras de estilo um elemento recebe;

# Classes dinâmicas no CSS

- Podemos também aplicar lógica para mudar a classe de CSS de um elemento;
- Também utilizaremos o if ternário;
- Essa abordagem é mais interessante que o CSS inline;
- Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código;

# CSS Modules

- O CSS Modules é um recurso de CSS scoped;
- Ou seja, ele vai ser exclusivo do componente;
- O nome do arquivo é: Componente.module.css;
- Precissamos importá-lo também no componente;
