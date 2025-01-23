const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizou algo</h1>;
    } else {
      return <h1>Renderizou outra coisa</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click</button>
        <button onClick={() => console.log("Algo simples pode")}>
          Inline Function
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não é recomendado");
            }
          }}
        >
          Má Prática
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
