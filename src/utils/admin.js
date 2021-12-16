import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import getPayload from "./payload";
const admin = (Component) => {
  const WrappedComponent = (props) => {
    const [payload] = useState(getPayload());
    console.log(payload);
    return payload.role === "ADMIN" ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    );
  };

  return WrappedComponent;
};
export default admin;
//localstorage --> limpiar del navegador
// sessionStorage --> cada vez que cierras la pestaña
