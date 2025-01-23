const Challenge = () => {
  const a = 10;
  const b = 20;

  return (
    <>
      <h1>O valor de a é {a}</h1>
      <h1>O valor de b é {b}</h1>
      <button onClick={() => console.log(a + b)}>Soma dos dois valores</button>
    </>
  );
};

export default Challenge;
