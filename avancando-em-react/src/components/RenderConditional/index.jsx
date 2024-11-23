import { useState } from "react";
import styles from "./style.module.css";

const RenderConditional = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "Davi" && password === "123456") {
      setAuth(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button>Entrar</button>
        </form>

        {auth ? <h2>Usuário autenticado</h2> : <h2>Usuário não autenticado</h2>}

        <ul className={auth ? "block" : "none"}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Entrar</a>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default RenderConditional;
