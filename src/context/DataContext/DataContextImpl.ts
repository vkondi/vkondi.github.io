import { createContext } from "react";
import type { DataContextType } from "../types";

const DataContext = createContext<DataContextType | undefined>(undefined);
export default DataContext;
