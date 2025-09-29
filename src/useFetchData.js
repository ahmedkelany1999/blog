import { useEffect, useState, useCallback } from "react";

export const useFetchData = (id) => {
  const [result, setResult] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchDataFromJSON = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch("/sample.json");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (id) {
        const blog = data.posts.find((post) => String(post.id) === String(id));
        if (blog) {
          setResult(blog);
        } else {
          throw new Error("Blog not found");
        }
      } else {
       
        setResult(data.posts);
        setFilteredBlogs(data.posts);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDataFromJSON();
  }, [id, fetchDataFromJSON]);

  return {
    result,
    filteredBlogs,
    setFilteredBlogs,
    isLoading,
    isError,
  };
};
