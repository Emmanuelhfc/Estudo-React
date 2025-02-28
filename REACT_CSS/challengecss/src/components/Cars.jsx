import React from "react";
import style from "./Cars.module.css";

const Cars = ({ name, color, age }) => {
  return (
    <div>
      <h1 className={style.car_title}>{name}</h1>
      <h2 className={style.car_detail}>{color}</h2>
      <h2 className={style.car_detail}>{age}</h2>
    </div>
  );
};

export default Cars;
