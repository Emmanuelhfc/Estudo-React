import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      <h1>Esse usuário pode tirar a carteira</h1>
      <h2>Nome = {user.name}</h2>
      <h2>Profissão = {user.job}</h2>
      <h2>Idade = {user.age}</h2>
    </div>
  );
};

export default UserDetails;
