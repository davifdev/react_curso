import { useState } from "react";

const DynamicInline = () => {
  const [style, setStyle] = useState(true);

  const handleClick = () => {
    setStyle(!style);
  };

  return (
    <>
      <h2 style={{ color: style ? "#001121" : "#00f211" }}>
        Estilos Inline Dinâmico
      </h2>
      <button
        style={{
          cursor: "pointer",
          padding: ".5rem",
          borderRadius: "5px",
          outline: "none",
        }}
        onClick={handleClick}
      >
        Alterar
      </button>
      <hr />
    </>
  );
};

export default DynamicInline;
