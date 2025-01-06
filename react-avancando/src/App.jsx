import { useState } from "react";

import techGirl from "./assets/tech.jpg";
import { PropsComponent } from "./components/PropsComponent";
import { ChildrenProps } from "./components/ChildrenProps";
import { FunctionProps } from "./components/FunctionProps";
import { Number } from "./components/Number";
import { RandomNumber } from "./components/RandomNumber";

function App() {
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState([
    { id: 1, fruit: "Laranja" },
    { id: 2, fruit: "Maçã" },
    { id: 3, fruit: "Uva" },
    { id: 4, fruit: "Melancia" },
    { id: 5, fruit: "Morango" },
  ]);
  const [boolean, setBoolean] = useState(false);

  const [persons] = useState([
    { id: 1, name: "Davi Fernandes", age: 24 },
    { id: 2, name: "Robson Silva", age: 28 },
    { id: 3, name: "Jamelao Souza", age: 26 },
    { id: 4, name: "Rita Lee", age: 32 },
  ]);

  const [randomNumber, setRandomNumber] = useState(0);

  function showRandomNumber() {
    const number = Math.floor(Math.random() * 100);
    setRandomNumber(number);
  }

  function handleClick() {
    setCount((count) => count + 1);
  }

  function handlePrev() {
    const randomNumber = Math.floor(Math.random() * 6);

    setFruits((prevFruit) =>
      prevFruit.filter((prev) => {
        return prev.id !== randomNumber;
      })
    );
  }

  function greeting() {
    console.log("Hello Welcome!");
  }

  return (
    <>
      {console.log("redenrizou")}
      <h2>Avançando em React</h2>
      <div>
        <h3>Imagem Na pasta Public</h3>
        <img src="/vasquez.jpg" />

        <h3>Imagem na Pasta Assets</h3>
        <img src={techGirl} />
      </div>
      <br />
      <h2>Estados do React</h2>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
      <br />
      <br />
      <h2>Redenrização de Listas</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.fruit}</li>
        ))}
      </ul>
      <br />
      <button onClick={handlePrev}>Remover</button>
      <br />
      <br />
      <h3>Redenrização Condicional</h3>
      {boolean && <p>Essa parte só é mostrada se for true</p>}
      <button onClick={() => setBoolean(!boolean)}>Alterar</button>
      {boolean ? <p>true</p> : <p>false</p>}

      {persons.map((person) => (
        <PropsComponent name={person.name} age={person.age} key={person.id} />
      ))}

      <ChildrenProps>
        <h3>Essa é uma estrutura JSX </h3>
      </ChildrenProps>

      <FunctionProps greeting={greeting} />
      <Number randomNumber={randomNumber} />
      <RandomNumber showRandomNumber={showRandomNumber} />
    </>
  );
}

export default App;
