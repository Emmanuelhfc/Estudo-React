import React from "react";

const ChangeMessage = ({ handleMsg }) => {
  const msgs = ["OI", "Olá", "Hello"];

  return (
    <div>
      {msgs.map((msg, i) => (
        <button key={i} onClick={() => handleMsg(msg)}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default ChangeMessage;
