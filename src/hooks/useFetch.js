import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || "An unexpected error occurred.",
        });
      }
      setIsLoading(false);
    }
    fetchData();
  }, [fetchFn]);

  return { isLoading, error, fetchedData, setFetchedData };
}
