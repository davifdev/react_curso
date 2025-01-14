import { HookUseEffect } from "./components/HookUseEffect";
import { HookUseReducer } from "./components/HookUseReducer";
import { HookUseState } from "./components/HookUseState";
import { HookUseContextProvider } from "./components/HookUseContext";

import { useState } from "react";
import { HookUseRef } from "./components/HookUseRef";
function App() {
  const [user] = useState(false);

  return (
    <HookUseContextProvider value={{ user }}>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <hr />
      <h1>Hook useContext</h1>
      <h3>Usuário está logado ?</h3>
      {user ? <p>Usuário Logado</p> : <p>Usuário Deslogado</p>}
      <hr />
      <HookUseRef />
    </HookUseContextProvider>
  );
}

export default App;
