import "./App.css";

// Components
import ComponentCss from "./components/componentCSS";
import Greeting from "./components/Greeting";
import InlineStyle from "./components/InlineStyle";
import DynamicInline from "./components/DynamicInline";
import DynamicClass from "./components/DynamicClass";
import ModuleCSS from "./components/ModuleCSS";
function App() {
  return (
    <>
      <h2>
        Adicionando um Css Global <strong>CSS</strong>
      </h2>
      <hr />
      <ComponentCss />
      <Greeting />
      <InlineStyle />
      <DynamicInline />
      <DynamicClass />
      <ModuleCSS />
    </>
  );
}

export default App;
