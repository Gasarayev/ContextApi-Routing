import React, { createContext, useEffect, useState } from "react";

export const ContextApi = createContext(null);

function ContextA({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <ContextApi.Provider value={{ products, setProducts }}>
      {children}
    </ContextApi.Provider>
  );
}

export default ContextA;
