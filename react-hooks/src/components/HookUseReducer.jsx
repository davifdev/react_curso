import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "robson":
      return (state = "Robson Fernandes");
    case "antonio":
      return (state = "Antônio Luiz");
    case "francisco":
      return (state = "Francisco Pinto");
    default:
      return state;
  }
}

export const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, "Davi Fernandes");

  function handleClick() {
    dispatch({
      type: "francisco",
    });
  }

  return (
    <>
      <h1>Hook useReducer</h1>
      <h3>{state}</h3>
      <button onClick={handleClick}>Clique</button>
      <hr />
    </>
  );
};
