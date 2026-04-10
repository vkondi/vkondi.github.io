import { useState, useEffect } from "react";
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

  // Fetch blogs when authenticated
  useEffect(() => {
    if (!isAuthenticated) return;

    const controller = new AbortController();

    (async () => {
      try {
        const response = await axios.get<{ blogs: Article[] }>(
          `${BASE_URL}/api/v1/portfolio/blogs`,
          {
            signal: controller.signal,
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
        if (!controller.signal.aborted) {
          console.error("[DataProvider][fetchBlogs] >> Exception:", error);
        }
      }
    })();

    return () => controller.abort();
  }, [isAuthenticated, BASE_URL]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
