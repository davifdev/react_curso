import { useEffect, useRef, useState } from "react";

export const HookUseRef = () => {
  const [render, setRender] = useState(false);
  const renderQtd = useRef(0);
  const inputRef = useRef(null);
  const [item, setItem] = useState("");

  useEffect(() => {
    renderQtd.current = renderQtd.current + 1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(item);

    setItem("");
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Hook useRef</h1>
      <h3>Contagem de Redenrização: {renderQtd.current}</h3>
      <button onClick={() => setRender(!render)}>Renderizar</button>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Ref:</span>
          <input
            type="text"
            onChange={(e) => setItem(e.target.value)}
            value={item}
            ref={inputRef}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <hr />
    </>
  );
};
