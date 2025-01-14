/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from "react";
import NumberList from "./NumberList";
import Count from "./Count";

export const HookUseCallbackEMemo = () => {
  const [count, setCount] = useState(0);
  const [fruitList] = useState([
    "Manga",
    "Melancia",
    "Kiwi",
    "Jambo",
    "Tomate",
    "Ameixa",
  ]);

  const [inputSearch, setInputSearch] = useState("");
  const [theme, setTheme] = useState("light");

  const filteredFruits = useMemo(() => {
    console.log("Estou sendo renderizado");
    return fruitList.filter((fruit) => {
      return fruit.toLowerCase().includes(inputSearch.toLowerCase());
    });
  }, [inputSearch]);

  const togleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, [theme]);

  const handleCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Count count={count} />
      <button onClick={handleCount}>Count</button>

      <input type="text" onChange={(e) => setInputSearch(e.target.value)} />
      <button>Pesquisar</button>
      <ul>
        {filteredFruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <NumberList theme={theme} togleTheme={togleTheme} />
    </>
  );
};
