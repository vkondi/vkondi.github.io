import { useContext } from "react";
import DataContext from "./DataContextImpl";

export const usePortfolioData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("usePortfolioData must be used within a DataProvider");
  }
  return context;
};

export default usePortfolioData;
