import "./App.css";
import Esmeralda from "./assets/esmeralda.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  const [userName, setName] = useState("João");

  const car = [
    { id: 1, brand: "A", km: 3000, value: 10000, newCar: false },
    { id: 2, brand: "B", km: 3000, value: 10000, newCar: false },
    { id: 3, brand: "C", km: 3000, value: 10000, newCar: false },
    { id: 4, brand: "D", km: 3000, value: 10000, newCar: false },
    { id: 5, brand: "E", km: 3000, value: 10000, newCar: false },
  ];

  function showMessage() {
    console.log("Executou função do pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avancando</h1>
      {/* <div>
        <img src="/esmeralda.png" alt="Esmeralda no LOL" />
      </div>
      <div>
        <img src={Esmeralda} alt="Logo do React" />
      </div> */}
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName userName={userName} />
      {/* Destructuring */}
      <CarDetails brand="WM" km={3000} value={10000} newCar={false} />
      {/* Reaproveitamento */}
      <CarDetails brand="Fiat" km={0} value={100500} newCar={true} />
      <CarDetails brand="GM" km={30} value={50} newCar={false} />
      {/* Renderização de lista */}
      {car.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          value={car.value}
          newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="Alguma Coisa" />
      {/* Prop children */}
      <Container>
        <h4>Esse HTML veio do pai</h4>
      </Container>

      {/* Função na prop */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State lift */}
      <Message msg={message} />
      <ChangeMessage handleMsg={handleMessage} />
    </>
  );
}

export default App;
