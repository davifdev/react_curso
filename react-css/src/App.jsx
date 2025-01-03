import "./App.css";
import { Greeting } from "./components/Greeting";

import { Message } from "./components/Message";
import { SecondMessage } from "./components/SecondMessage";

let cor = false;

function App() {
  return (
    <>
      <h2>React com CSS</h2>
      <Message />
      <SecondMessage />
      <p style={{ color: "purple" }}>Esse texto foi estilizado inline</p>
      <p style={{ color: cor ? "red" : "green" }}>
        Esse texto possui estilo dinâmico
      </p>
      <p className={cor ? "colorRed" : "colorBlue"}>
        Esse texto posui classe dinâmica
      </p>
      <Greeting />
    </>
  );
}

export default App;
