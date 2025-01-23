const TemplateExpression = () => {
  const data = {
    age: 23,
    job: "programmer",
  };

  const name = "Mateus";

  return (
    <>
      <h1>O nome é {name}</h1>
      <p>
        Idade = {data.age}. Job= {data.job}
      </p>
      <p>{console.log("Printou alguma coisa")}</p>
    </>
  );
};

export default TemplateExpression;
