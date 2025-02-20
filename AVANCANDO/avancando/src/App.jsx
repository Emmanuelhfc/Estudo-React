import "./App.css";
import Esmeralda from "./assets/esmeralda.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";

function App() {
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
    </>
  );
}

export default App;
