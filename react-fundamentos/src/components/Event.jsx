const Event = () => {
  const renderConditional = false;

  function handleClick() {
    console.log("Você Clicou!");
  }

  function textNumberOne() {
    return <p>Eu sou o texto 1</p>;
  }

  function textNumberTwo() {
    return <p>Eu sou o texto 2</p>;
  }

  return (
    <>
      <button onClick={handleClick}>Clique</button>
      <button
        onClick={function (e) {
          console.log("Você Clicou Novamente");
          if (e.target.textContent === "Clique Novamente") {
            console.log("Pelo amor de Deus cria uma função externa!");
          }
        }}
      >
        Clique Novamente
      </button>
      {renderConditional ? textNumberOne() : textNumberTwo()}
      <hr />
    </>
  );
};

export default Event;
