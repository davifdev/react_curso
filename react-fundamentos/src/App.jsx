import FirstComponent from "./components/FirstComponents";
import TemplateExpression from "./components/TemplateExpressions";
import { Greeting } from "./components/Greeting";
import Event from "./components/Event";

import "./App.css";

function App() {
  return (
    <>
      <FirstComponent />
      <TemplateExpression />
      <Greeting />
      <Event />
    </>
  );
}

export default App;
