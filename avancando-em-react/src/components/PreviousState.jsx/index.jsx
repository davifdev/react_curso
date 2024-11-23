import { useState } from "react";
import styles from "./style.module.css";

const PreviousState = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Davi", age: 24, status: "Ativo" },
    { id: 2, name: "Laura", age: 21, status: "Inativo" },
    { id: 3, name: "Roberval", age: 32, status: "Ativo" },
  ]);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * (4 - 1) + 1);

    console.log(randomNumber);

    setUsers((prevState) =>
      prevState.filter((user) => user.id !== randomNumber)
    );
  };

  return (
    <>
      <div className={styles.container}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.age} {user.status}
            </li>
          ))}
        </ul>
        <button onClick={handleClick}>Remover</button>
      </div>
      <hr />
    </>
  );
};

export default PreviousState;
