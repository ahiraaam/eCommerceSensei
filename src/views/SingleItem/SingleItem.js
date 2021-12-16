import { Button, Col, Row } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Select, notification } from "antd";
import "./singleItem.css";
import { useCartContext } from "../../context/cartContext";
import { useUserContext } from "../../context/userContext";
const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};

export default function SingleItem() {
  const context = useCartContext();
  const contextUser = useUserContext();
  const { Option } = Select;
  const [item, setItem] = useState({});
  const [quantity, setQuantiy] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URI}/item/${id}`).then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setQuantiy(value);
  };
  const addToCart = (item) => {
    console.log(context.cart.products);
    if (context.cart.products.find((item) => item._id === id)) {
      openNotificationWithIcon(
        "error",
        "El producto ya existe en el carrito",
        "Si desea modificar la cantidad vaya al carrito y modifique la cantidad de productos."
      );
    } else {
      openNotificationWithIcon(
        "success",
        "Producto agregado al carrito",
        "Si desea modificar la cantidad vaya al carrito y modifique la cantidad de productos."
      );
      context.setCart({
        ...context.cart,
        products: [
          ...context.cart.products,
          { ...item, qty: quantity, total: quantity * item.price },
        ],
        total: context.cart.total + quantity * item.price,
      });
    }
  };
  return (
    <Row className="container">
      <Col span={13} className="single-item__left_side">
        <img src={item.image} alt="producto" />
      </Col>
      <Col span={9} className="single-item__right_side">
        <h1>{item.product_name}</h1>
        <h3>Precio: $ {item.price}</h3>
        <p>Marca: {item.brand}</p>
        <p>{item.description}</p>
        <div>
          Cantidad:
          <Select
            defaultValue="1"
            style={{ width: 80, marginLeft: 10 }}
            onChange={handleChange}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
        </div>
        <br></br>
        {contextUser.usuarioActual ? (
          <Button onClick={() => addToCart(item)} disabled={false}>
            Agregar al carrito
          </Button>
        ) : (
          <>
            <Button onClick={() => addToCart(item)} disabled={true}>
              Agregar al carrito
            </Button>

            <p>
              Si desea comprar favor de <Link to="/login">Iniciar Sesión</Link>o{" "}
              <Link to="/signup">Registrarse</Link>
            </p>
          </>
        )}
      </Col>
    </Row>
  );
}
