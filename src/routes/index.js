import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../views/Home";
import Signup from "../views/Signup";
import Login from "../views/Login";
import Item from "../views/Item";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/userContext";
import Profile from "../views/Profile";
import SingleItem from "../views/SingleItem";
import FormItem from "../views/FormItem/FormItem";
import Cart from "../views/Cart";
// DEVUELVE UN JSX PARA QUE SEA UN COMPONENTE DE REACT
const Logout = () => {
  window.localStorage.removeItem("token");
  const context = useUserContext();
  context.setUsuarioActual();
  return <Redirect to="/" />;
};
export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/carrito" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/items" component={Item} />
        <Route exact path="/items/create" component={FormItem} />
        <Route exact path="/items/:id" component={SingleItem} />
      </Switch>
    </Router>
  );
}
