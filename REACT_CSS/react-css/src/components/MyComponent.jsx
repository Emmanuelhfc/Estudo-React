import React from "react";
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div>
      <h1>My Component</h1>
      <p>Esse parágrafo é de MyComponent</p>
      <p className="my-paragraph">
        Esse parágrafo está estilizado através da classe
      </p>
    </div>
  );
};

export default MyComponent;
