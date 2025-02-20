import React, { useState } from "react";

const ManageData = () => {
  let num = 10;
  console.log(`num= ${num}`);

  const [numState, setNumState] = useState(10);
  console.log(`numState=${numState}`);

  return (
    <div>
      <div>
        <p>Valor de num= {num}</p>
        <button onClick={() => (num = 20)}>Botão para mudar num</button>
      </div>
      <div>
        <p>Valor de numState= {numState}</p>
        <button
          onClick={() => {
            setNumState(numState + 1);
          }}
        >
          Botão para mudar numState
        </button>
      </div>
    </div>
  );
};

export default ManageData;
