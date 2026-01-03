import { useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { portfolioData } from "./portfolioData";
import type { DataContextType, Article } from "../types";
import DataContext from "./DataContextImpl";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState<DataContextType | undefined>(portfolioData);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await axios.get<{ blogs: Article[] }>(
        `${BASE_URL}/api/v1/portfolio/blogs`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        },
      );

      setData((prevData) => ({
        ...(prevData ?? portfolioData),
        blogs: response.data.blogs ?? prevData?.blogs ?? portfolioData.blogs,
      }));
    } catch (error) {
      console.error("[DataProvider][fetchBlogs] >> Exception:", error);
    }
  }, [BASE_URL]);

  // Fetch blogs on component mount
  useEffect(() => {
    if (isAuthenticated) {
      void fetchBlogs();
    }
  }, [isAuthenticated, fetchBlogs]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
