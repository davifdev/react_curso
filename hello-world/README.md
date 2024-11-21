# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- # Estrutura Básica do React

- package.json, package-lock.json: são arquivos responsaveis pelas dependências do nosso projeto;
- main.jsx, index.jsx: são arquivos responsaveis por iniciar a nossa aplicação;
- app.jsx: É o arquivo onde vamos colocar o contéudo da nossa interface;
- É o arquivo que redenriza o nosso contéudo;
- node_modules: É a pasta onde fica todas as dependências e modulos do nosso projeto;
- src: É a pasta principal onde fica todos os nossos arquivos;
- public: Os arquivos públicos que precissam ficar visível para a nossa aplicação;
- react.dom: É a integração do react com o dom, com a web;
- create-root: Esse método vem do reactDom e esse método aceita um parâmetro que é qual elemento do html vai receber a nossa aplicação react;
- render: É um método que vem do verbo redenrizar que dentro do react é oque nós usamos para mostar em tela;
- react-strictmode: Nós avisa sobre possiveis erros no nosso código;
