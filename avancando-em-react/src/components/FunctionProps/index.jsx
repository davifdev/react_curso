/* eslint-disable react/prop-types */
import styles from "./style.module.css";

const FunctionProps = ({ handleButton }) => {
  return (
    <>
      <div className={styles.container}>
        <h2>Ativando a Função</h2>
        <button onClick={handleButton}>Count</button>
      </div>
    </>
  );
};

export default FunctionProps;
