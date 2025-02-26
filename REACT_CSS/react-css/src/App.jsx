import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <>
      <div>
        <h1>React CSS</h1>
        <MyComponent />
        <p>Esse parágrafo é de App.css - Vazou CSS de MyComponent</p>
      </div>
    </>
  );
}

export default App;
