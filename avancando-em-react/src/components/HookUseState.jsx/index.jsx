import styles from "./style.module.css";

import { useState } from "react";

const HookUseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Count: {count}</h2>
        <button onClick={handleClick}>Count</button>
      </div>
    </>
  );
};

export default HookUseState;
