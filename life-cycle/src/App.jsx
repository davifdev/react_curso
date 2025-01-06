import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Fase 1 Componente Montado!");
  }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log("Fase 2 Componente Atualizado");
    }
  }, [count]);

  useEffect(() => {
    if (count < 0) console.log("Fase 3 Componente Desmontado");
  }, [count]);

  return (
    <>
      {console.log("Renderizou")}
      <h1>Life Cycle React</h1>
      {count >= 0 && <h2>{count}</h2>}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
    </>
  );
}

export default App;
