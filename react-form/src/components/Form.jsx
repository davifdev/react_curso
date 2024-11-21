import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [sexo, setSexo] = useState("selec");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      sexo,
      mensagem,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setName("");
    setSexo("Masculino");
    setMensagem("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            placeholder="Seu nome..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Sexo:</span>
          <select onChange={(e) => setSexo(e.target.value)} value={sexo}>
            <option value="selec" disabled={true}>
              Selecione
            </option>
            <option value="masc">Masculino</option>
            <option value="fem">Feminino</option>
            <option value="our">Outro</option>
          </select>
        </label>
        <label>
          <span>Mensagem:</span>
          <textarea
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMensagem(e.target.value)}
            value={mensagem}
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
