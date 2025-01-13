import { useState } from "react";
import { useEffect } from "react";

export const HookUseEffect = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Executado!!");
  });

  useEffect(() => {
    setName("Roberval Pinto");
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("Count Mudou!");
    }
  }, [count]);

  return (
    <>
      <h1>Hook useEffect</h1>
      <h3>{name}</h3>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Count</button>
    </>
  );
};
