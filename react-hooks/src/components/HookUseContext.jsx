/* eslint-disable react/prop-types */
import { useContext, createContext } from "react";

const HookUseContext = createContext();

export const HookUseContextProvider = ({ children }) => {

  return (
    <HookUseContext.Provider >{children}</HookUseContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContextHook = () => {
  return useContext(HookUseContext);
};
