import React from "react";
import { useUserContext } from "../context/userContext";
import protect from "../utils/protect";

const Profile = () => {
  const context = useUserContext();
  return (
    <>
      {context.usuarioActual ? (
        <div>
          <h1>Nombre: {context.usuarioActual.user.first_name}</h1>
          <p> Apellido: {context.usuarioActual.user.last_name} </p>
          <p> Email: {context.usuarioActual.user.email} </p>
          <p> Email: {context.usuarioActual.role} </p>
        </div>
      ) : (
        <p>No puedes acceder a esta informacion</p>
      )}
    </>
  );
};
export default protect(Profile);
