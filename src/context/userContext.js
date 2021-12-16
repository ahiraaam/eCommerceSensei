import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const UserContext = React.createContext();

function UserProvider(props) {
  const [usuarioActual, setUsuarioActual] = useState(); //usuario actual para mostrar los detalles
  //Especifico que cosas voy a "exponer", es decir que cosas se podrán usar fuera
  const [token, setToken] = useState(window.localStorage.getItem("token")); //usuario actual para mostrar los detalles

  useEffect(() => {
    window.addEventListener(
      "storage",
      setToken(localStorage.getItem("token")),
      false
    );
  });
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    if (token) {
      axios
        .get("https://ecomerce-master.herokuapp.com/api/v1/user/me", config)
        .then((response) => {
          setUsuarioActual(response.data);
        });
    } else {
    }
  }, []);

  const value = {
    usuarioActual,
    setUsuarioActual,
  };

  //Regresa un componente NombreContexto.Provider
  return <UserContext.Provider value={value} {...props} />;
}

// Paso 3: Crear el consumidor de nuestro contexto
// Es la forma para acceder a los datos
const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

// Paso 4: Exportar el proveedor y el consumidor
// para que se puedan utilizar en los demás componentes

export { UserProvider, useUserContext };
