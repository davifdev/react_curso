import { memo } from "react";

/* eslint-disable react/prop-types */
 const NumberList = ({ togleTheme, theme }) => {
  return (
    <>
      <h3>{theme}</h3>
      <p>Re-render {(Math.random() * 100).toFixed(0)}</p>
      <button onClick={togleTheme}>Togle</button>
    </>
  );
};

export default memo(NumberList);
