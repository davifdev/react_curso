/* eslint-disable react/prop-types */
import styles from "./style.module.css";

const ChildrenProp = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <h2>Utilizando Children</h2>
        {children}
      </div>
      <hr />
    </>
  );
};

export default ChildrenProp;
