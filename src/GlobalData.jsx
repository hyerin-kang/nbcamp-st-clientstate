import { createContext, useState } from "react";

export const GlobalContext = createContext();
const GlobalData = ({ children }) => {
  const [message, setMessage] = useState("");
  return (
    <GlobalContext.Provider value={{ message, setMessage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalData;
