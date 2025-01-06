const greting = false;

export function Events() {
  const handleClick = (e) => {
    console.log(e.target);
  };

  // Sudações
  const greet = () => {
    if (greting) {
      return <p>Olá, seja bem-vindo</p>;
    } else {
      return <p>Ops!, não encontrado</p>;
    }
  };

  return (
    <>
      {/* Evento de Click */}
      <button onClick={handleClick}>Clique Aqui!</button>
      <button onClick={(e) => console.log(e.target)}>Enviar</button>
      {greting ? greet() : greet()}
    </>
  );
}
