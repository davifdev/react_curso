const greting = false;

export function Events() {
  const handleClick = (e) => {
    console.log(e.target);
  };

  const greet = () => {
    if (greting) {
      return <p>Olá, seja bem-vindo</p>;
    } else {
      return <p>Ops!, não encontrado</p>;
    }
  };

  return (
    <>
      <button onClick={handleClick}>Clique Aqui!</button>
      <button onClick={(e) => console.log(e.target)}>Enviar</button>
      {greting ? greet() : greet()}
    </>
  );
}
