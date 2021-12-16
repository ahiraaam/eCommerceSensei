import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const ProductContext = React.createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URI}/item`).then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);

  const value = {
    products,
    setProducts,
  };

  return <ProductContext.Provider value={value} {...props} />;
}

const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};

export { ProductProvider, useProductContext };
