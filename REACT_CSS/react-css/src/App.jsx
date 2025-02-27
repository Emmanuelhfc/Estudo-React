import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 9;
  const redTitle = false;
  return (
    <>
      <div>
        {/* CSS global */}
        <h1>React CSS</h1>
        {/* CSS components */}
        <MyComponent />
        <p>Esse parágrafo é de App.css - Vazou CSS de MyComponent</p>
        {/* CSS inline */}
        <p
          style={{
            color: "black",
            padding: "30px",
            borderTop: "5px solid red",
          }}
        >
          Esse parágrafo foi estilizado com inline
        </p>

        {/* CSS inline dinâmico */}
        <p style={n > 10 ? { color: "pink" } : { color: "purple" }}>
          CSS dinâmico
        </p>
        <p style={n < 10 ? { color: "pink" } : { color: "purple" }}>
          CSS dinâmico
        </p>

        {/* Classe CSS dinâmica */}
        <h2 className={redTitle ? "red-title" : "title"}>Classe Dinâmica</h2>

        {/* CSS modules */}
        <Title />
      </div>
    </>
  );
}

export default App;
