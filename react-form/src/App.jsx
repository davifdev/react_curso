import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("selecione");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      lastName,
      message,
      city,
    };

    console.log(user);

    setName("");
    setLastName("");
    setMessage("");
    setCity("selecione");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>
          <span style={{ display: "block", marginBottom: "5px" }}>Name: </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Digite seu nome..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span
            style={{ display: "block", marginBottom: "5px", marginTop: "5px" }}
          >
            lastName:{" "}
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Digite seu sobrenome..."
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </label>
        <label>
          <span
            style={{ display: "block", marginBottom: "5px", marginTop: "5px" }}
          >
            Mensagem:
          </span>
          <textarea
            name="msg"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Digite sua mensagem.."
          ></textarea>
        </label>
        <label>
          <span
            style={{
              marginRight: "15px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            Cidade
          </span>
          <select
            name="cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="selecione" disabled>
              -- Selecione --
            </option>
            <option value="tg">Taguatinga</option>
            <option value="cl">Ceilandia</option>
          </select>
        </label>
        <button type="submit" style={{ marginTop: "10px" }}>
          Enviar
        </button>
      </form>
    </>
  );
}

export default App;
