// Components
import Imagens from "./components/Imagens";
import HookUseState from "./components/HookUseState.jsx";
import RenderList from "./components/RenderList/index.jsx";
import PreviousState from "./components/PreviousState.jsx/index.jsx";
import RenderConditional from "./components/RenderConditional/index.jsx";
import Card from "./components/Card/index.jsx";
import ChildrenProp from "./components/ChildrenProp/index.jsx";

import { useState } from "react";
import FunctionProps from "./components/FunctionProps/index.jsx";
import ShowButton from "./components/ShowButton/index.jsx";

function App() {
  const [count, setCount] = useState(0);
  
  const [colaboradores] = useState([
    {
      id: 1,
      name: "Davi Fernandes de Lima",
      age: 24,
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Robson Marques Paiva",
      age: 28,
      role: "Analista de Dados",
    },
    {
      id: 3,
      name: "Rebeca Fonseca",
      age: 26,
      role: "UI & UX Design",
    },
  ]);


  const handleButton = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Imagens />
      <HookUseState />
      <RenderList />
      <PreviousState />
      <RenderConditional />
      {colaboradores.map((colab) => (
        <Card
          key={colab.id}
          name={colab.name}
          age={colab.age}
          role={colab.role}
        />
      ))}
      <hr />
      <ChildrenProp>
        <button onClick={() => console.log("Clicou!")}>Clique</button>
      </ChildrenProp>
      <ShowButton count={count} />
      <FunctionProps handleButton={handleButton} />
    </>
  );
}

export default App;
