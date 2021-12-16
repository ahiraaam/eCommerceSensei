// LO USAREMOS COMO UN HOC PARA PROTEGER CIERTOS COMPONENTES
// HOC ES UN COMPONENTE DE ORDEN SUPERIOR, COMPARTE LA LÓGICA
// REUTILIZAR LA LÓGICA , PUEDO PASARSELA A CUALQUIER COMPONENTE
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
const protect = (Component) => {
  // El servidor nos regresa un token
  // Aún no usando la libreria de JWT

  // CREAMOS UNA FUNCION QUE LE PASAMOS LOS PROPS DEL USUARIO Y DIRECCIONAMOS
  const WrappedComponent = (props) => {
    const [token] = useState(window.localStorage.getItem("token"));

    return token ? <Component {...props} /> : <Redirect to="/" />;
  };

  return WrappedComponent;
};
export default protect;
//localstorage --> limpiar del navegador
// sessionStorage --> cada vez que cierras la pestaña
