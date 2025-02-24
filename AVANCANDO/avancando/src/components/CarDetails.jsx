import React from "react";

const CarDetails = ({ value, brand, km, newCar }) => {
  return (
    <div>
      <h2>Car Details</h2>
      <li>Brand: {brand}</li>
      <li>KM: {km}</li>
      <li>Valor: R${value}</li>
      {newCar && <h3>Esse carro é novo</h3>}
    </div>
  );
};

export default CarDetails;
