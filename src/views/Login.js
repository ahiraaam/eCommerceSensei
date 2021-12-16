import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";
import { useUserContext } from "../context/userContext";
import { message, Form, Input, Button } from "antd";
export default function Login() {
  const history = useHistory();
  const context = useUserContext();

  const login = (datos) => {
    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/login", datos)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        const config = {
          headers: {
            Authorization: `JWT ${response.data.token}`,
          },
        };
        axios
          .get("https://ecomerce-master.herokuapp.com/api/v1/user/me", config)
          .then((response) => {
            if (response.status === 200) {
              context.setUsuarioActual(response.data);
            }
          });
        history.push("/");
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
      });
  };
  const { inputs, handleInput, handleSubmit } = useForm(login, {});

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="email">Email</label>
          <Input
            type="text"
            name="email"
            onChange={handleInput}
            value={inputs.email}
          />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={handleInput}
            value={inputs.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
