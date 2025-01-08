import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Contador</h2>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Count</button>
    </>
  );
}

export default App;
