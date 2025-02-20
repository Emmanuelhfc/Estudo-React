import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Joao");

  return (
    <div>
      {x && <h1>Verdade</h1>}
      {!x && <h1>Agora é falso</h1>}
      {name === "Joao" ? (
        <div>
          <h2>O nome é joão</h2>
        </div>
      ) : (
        <h2>O nome não é João</h2>
      )}

      <button onClick={() => setName("Matheus")}>Mudar Nome</button>
    </div>
  );
};

export default ConditionalRender;
