import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent /> {/*Algo */}
      <TemplateExpression />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
