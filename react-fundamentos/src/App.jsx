import "./App.css";
import { Events } from "./components/Events";

import { FirstComponent } from "./components/FirstComponent";
import { TemplateExpressions } from "./components/TemplateExpressions";

function App() {
  // Comentário
  return (
    <>
      {/* Comentário */}
      <h2 className="titulo">Hello World!</h2>
      <FirstComponent />
      <TemplateExpressions />
      <Events />

      <label htmlFor=""></label>
    </>
  );
}

export default App;
