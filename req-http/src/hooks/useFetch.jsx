import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState(null);
  const [error, setError] = useState(false);
  const [callFetch, setCallFetch] = useState(false);
  const [productId, setProductId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(data),
      });

      setMethod(method);
      return;
    }

    if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      setMethod(method);
      setProductId(data);

      return;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(url);
        const json = await data.json();

        setData(json);
      } catch (error) {
        console.log(error);

        setError("Ops! Houve algum erro :/");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    if (method === "POST") {
      const sendData = async () => {
        let fetchOptions = [url, config];
        const data = await fetch(...fetchOptions);
        const json = await data.json();

        setCallFetch(json);
      };

      sendData();
      return;
    }

    if (method === "DELETE") {
      const deleteData = async () => {
        const deleteURL = `${url}/${productId}`;
        const fetchOptions = [deleteURL, config];
        const data = await fetch(...fetchOptions);
        const json = await data.json();

        setCallFetch(json);
      };

      deleteData();
    }
  }, [config, method, productId, url]);

  return { data, loading, error, httpConfig };
};
