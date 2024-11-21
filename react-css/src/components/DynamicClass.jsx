import { useState } from "react";

const DynamicClass = () => {
  const [style, setStyle] = useState(true);

  const handleClick = () => {
    setStyle(!style);
  };

  return (
    <>
      <h2 className={style ? "primaryCollor" : "secondaryCollor"}>
        Classes Dinâmicas
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

export default DynamicClass;
