import { useState } from "react";

export const HookUseState = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
    setName("Robson Santos");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const person = {
      name,
      age,
    };

    console.log(person);

    setName("");
    setAge("");
  }

  console.log(name, age);
  return (
    <>
      <h1>Hook useState</h1>
      {console.log("renderizou")}
      <h2>
        {name} {count}
      </h2>
      <button onClick={handleClick}>Alterar</button>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            placeholder="Digite o seu Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Idade:</span>
          <input
            type="text"
            placeholder="Digite a sua idade"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <hr />
    </>
  );
}

