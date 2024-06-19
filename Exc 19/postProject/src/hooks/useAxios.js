import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (!url) return;

    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios({
          url,
          cancelToken: source.token,
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options.headers,
          },
        });
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [url, JSON.stringify(options)]); 

  return { data, error, loading };
};

export default useAxios;
