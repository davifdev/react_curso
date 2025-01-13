import { HookUseEffect } from "./components/HookUseEffect";
import { HookUseReducer } from "./components/HookUseReducer";
import { HookUseState } from "./components/HookUseState";
import { HookUseContextProvider } from "./components/HookUseContext";

import { useState } from "react";
function App() {
  const [user, setUser] = useState(false);
  
  return (
    <HookUseContextProvider value={{ user }}>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <hr />
      <h1>Hook useContext</h1>
      <h3>Usuário está logado ?</h3>
      {user ? <p>Usuário Logado</p> : <p>Usuário Deslogado</p>}
    </HookUseContextProvider>
  );
}

export default App;
