import { type AlertColor } from "@mui/material";
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
} from "react";

export interface GlobalContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  makeAlert: (type: AlertColor, message: string, click?: any) => void;
}

const defaultState = {
  theme: "light",
  setTheme: () => {
    // aa
  },
  makeAlert: () => {
    // aa
  },
};

export const GlobalContext = createContext<GlobalContextType>(defaultState);
export const useGlobalContext = () => useContext(GlobalContext);
