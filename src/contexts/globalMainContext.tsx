// context.tsx
import React, { useState, createContext, useContext, useEffect } from "react";
import { useGlobalGenerateContext } from "./generateContext";

type GlobalMainContextType = {
  theme: string;
  setTheme: (newTheme: string) => void;
  client: object;
  setClient: (newClient: object) => void;
  // toasted: boolean;
  // setToasted: (toasted: object) => void;
};

// export const GlobalMainContext = createContext<GlobalMainContextType | null>(
//   null
// );
export const GlobalMainContext = createContext<any>(null);

const GlobalMainProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasted, setToasted] = useState({
    type: "error" as "alert" | "error" | "success", // Corrected syntax
    check: false,
    text: "",
  });
  const [theme, setTheme] = useState<string>("light");
  const [client, setClient] = useState<object>({});
  const [menuTrigger, setMenuTrigger] = useState(false);
  const [signupTrigger, setSignupTrigger] = useState(false);

  const triggerMobileNavbar = () => {
    setMenuTrigger(!menuTrigger);
  };

  const contextValue = {
    theme,
    setTheme,
    client,
    setClient,
    toasted,
    setToasted,
    menuTrigger,
    setMenuTrigger,
    triggerMobileNavbar,
    signupTrigger,
    setSignupTrigger,
  };

  return (
    <GlobalMainContext.Provider value={contextValue}>
      {children}
    </GlobalMainContext.Provider>
  );
};

export const useGlobalMainContext = () => useContext(GlobalMainContext);

export default GlobalMainProvider;
