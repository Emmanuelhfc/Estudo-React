import "./App.css";
import Cars from "./components/Cars";

function App() {
  const cars = [
    { name: "Gol", color: "Preto", age: "10 anos" },
    { name: "Ferrari", color: "Vermelho", age: "50 anos" },
    { name: "Hilux", color: "Prata", age: "2 anos" },
  ];

  return (
    <>
      <h1>Challenge CSS</h1>

      {cars.map((car, index) => (
        <Cars key={index} name={car.name} age={car.age} color={car.color} />
      ))}
    </>
  );
}

export default App;
