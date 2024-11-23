# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Avançando em React

# Imagens no React

# Imagens em public

- As imagens públicas do nosso projeto podem ficar na pasta public;
- De lá elas podem ser chamadas pelas tags img diretamente pelo /nome.jpg;
- Pois a pasta public fica linkada com o src das imagens;

# Imagens em assets

- A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada;
- Mas um padrão bem utilizado para as imagens dos projetos é colocar em uma pasta chamada assets, em src;
- Ou seja, você vai encontrar projetos com as duas abordagens;
- Em assets precissamos importar as imagens, e o src é dinâmico com o nome de importação

# O que são hooks?

- Recurso do React que tem diversas funções;
- São funções que permitem conectar o estado e o ciclo de vida do react a partir de componentes funcionais;
- Como guardar e alterar o estado de algum dado na nossa aplicação;
- Todos os hooks começam com use, por exemplo: useState;
- Podemos criar os nossos hooks, isso é chamado de custom hook;
- Os hooks precisam ser importados;
- Geralmente são úteis em todas as aplicações, utilizaremos diversos ao longo do curso;

# useState hook

- O hook useState é um dos mais utilizados;
- Utilizamos para gerenciar o estado de algum dado, variáveis não funcionam corretamente, o componente não re-renderiza;
- Para guardar o dado definimos o nome da variável e para alterar vamos utilizar setNome, onde nome é o nome do nosso dado;

# Imutabilidade

A imutabilidade é o principio que os estados do  React respeitam. ela faz parte do paradigma funcional, onde o contéudo de uma variável não dever ser modificado e sim substituido.

Uma variável comum não tem o poder de refletir na nossa interface, quando nós queremos utilizar o contéudo de uma variável para refletir na nossa inteface nós usamos um estado.

# Fluxo de redenrização do React

Toda vez que nós alteramos o estado de um componente todo o nosso componente ele é recalculado, os estados são recriados do zero porém, reaproveitando o seu estado anterior

# Quando um componente é criado do zero?

1. Toda vez que nós alteramos o estado de um componente todo o componente ele é recaulculado;
2. Toda vez que o seu componente pai renderiza;
3. Toda vez que algumas das suas propiedades mudarem;

# Algoritimo de reconciliação

Cria em mémoria uma nova versão do html do componente, compara a nova versão com a versão anterior do html, aplica as operações em javascript para alterar somente o necessário no html.


# Renderização de lista

- Uma ação bem comum é renderizar listas de dados no template;
- Fazemos isso com os dados com tipo de array;
- Utilizando o método map para nos auxiliar;
- Além dos dados podemos inserir JSX em cada iteração;

Obs: Geralmente o map é feito com fechamento de chaves { }, porém o JSX é considerado um objeto e quando a gente retorna um objeto no map( ), nós colocamos entre ( );

# A propiedade key

- Iterar listas sem a propiedade key nos gera um warning, podemos verificar isso no console;
- O React precisa de uma chave única em cada um dos itens iterados;
- Isso serve para ajudá-lo na  redenrização do componente;
- Geralmente teremos um array de objetos e podemos colocar key como alguma chave única, como o id de algum dado;
- Em último caso devemos utilizar o index do método map;

# Previous state

- Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado;
- Isso é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em um valor novo;
- O primeiro argumento de um set sempre será o previous state;

# Renderização condicional

- Renderização condicional é quando imprimimos uma parte do template baseado em uma condiçao;
- Ou seja, utilizando uma checagem com if;
- Isso é interessante em situações como: usuário autenticado/não autenticado;

# Adicionando um else

- Podemos também realizar um if/else no JSX;
- Aqui devemos utilizar o if ternário;
- Onde temos a sintaxe: condição ? bloco1 : bloco2;

# Props

- Props é outro recurso fundamental do React;
- Nos permite passar valores de um componente pai para um componente filho;
- Isso será muito útil quando os dados forem carregados via banco de dados por exemplo;
- As props vem em um objeto no parametro da função do componente;

# Desestruturando props

- É super comum passar mais de uma prop em um componente;
- Para facilitar isso  o React nos permite desestruturar as propiedades que chegam, com o recurso de destructuring;
- Se temos duas props: name e age;
- Podemos fazer assim function MyComponent({name, age});
- Agora não precissamos mais utilizar props.algumaCoisa;
- Quando nós vamos passar números como propiedades e não queremos passar ele como um texto nós utilizamos {1234};

# Reutilização de componentes

- Com props a reutilização de componentes começa a fazer muito sentido;
- Se temos os dados de 1000 carros por exemplo, podemos reaproveitar o nosso CarDetails 1000 vezes;
- Isso torna nosso código mais padronizado, facilitando a manutenção;

# Reutilização com loop

- Os arrays de dados podem ter muitos itens também;
- Então o correto é utilizar uma estrutura de loop (map) para a sua exibição;
- E com isso conseguimos conciliar os três conceitos: redenrização de listas, reaproveitamento de componentes e props;

# React Fragments

- Os React fragments são interessantes para quando precissamos ter mais de um elemento pai em um componente;
- Criamos uma tag vazia: <> <>
- E ela serve como elemento pai, não alterando a estrutura do HTML com uma div, por exemplo;

# Children prop

- Children prop é um recurso utilizado para quando um componente precisa ter JSX dentro dele;
- Porém este JSX vem do componente pai;
- Então o componente age como um container, abraçando estes elementos;
- E children é considerada uma prop do componente;

# Funções em props

- As funções podem ser passadas para as props normalmente;
- Basta criar a função no componente pai e enviar como props para o componente;
- No componente filho ela pode ser ativada por um evento, por exemplo;
- Vamos ver na prática!

# Elevação de state

- Elevação de state ou State lift é quando um valor é elevado do componente filho para o componente pai;
- Geralmente temos um componente que usa o state e outro que o altera;
- Então precissamos passar a alteração para o componente pai, e este passa para o componente que usa o state;
