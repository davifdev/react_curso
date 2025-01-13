import { HookUseEffect } from "./components/HookUseEffect";
import { HookUseReducer } from "./components/HookUseReducer";
import { HookUseState } from "./components/HookUseState";

function App() {
  return (
    <>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </>
  );
}

export default App;
