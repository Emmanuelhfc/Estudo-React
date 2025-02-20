import { useState } from "react";

const ListRender = () => {
  const [list, setList] = useState([
    { id: 1, name: "João" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Josias" },
  ]);

  const deleteRandom = () => {
    const random = Math.floor(Math.random() * 4);
    console.log(`Random=${random}`);
    setList((prevList) => {
      return prevList.filter((list) => random !== list.id);
    });
  };

  return (
    <div>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
