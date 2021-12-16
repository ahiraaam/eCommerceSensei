import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import getPayload from "../../utils/payload";
const Navbar = () => {
  const context = useUserContext();
  const history = useHistory();
  const [payload] = useState(getPayload());
  const [input, setInput] = useState("");
  const buscar = () => {
    history.push(`/items?search=${input}`);
  };
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}

        <div className="logo">
          <Link to="/">Tienda sensei</Link>
        </div>

        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <Input placeholder="Busca producto" onChange={handleInput} />
            <Button onClick={buscar}>Buscar</Button>
            {context.usuarioActual ? (
              <>
                <li>
                  <Link to="/profile">
                    {context.usuarioActual.user.first_name}
                  </Link>
                </li>
                {context.usuarioActual.role === "ADMIN" ? (
                  <Link to="/items/create">Agregar Productos</Link>
                ) : null}
                <li>
                  <Link to="/carrito">Carrito</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
