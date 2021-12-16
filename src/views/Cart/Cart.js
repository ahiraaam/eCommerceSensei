import React from "react";
import { Table, Tag, Space, Button } from "antd";

import { useCartContext } from "../../context/cartContext";
export default function Cart() {
  const context = useCartContext();
  const columns = [
    {
      title: "Nombre del Producto",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Precio Unitario",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Cantidad",
      dataIndex: "qty",
      key: "qty",
      render: (text, item) => (
        <Space size="middle">
          <Button
            onClick={() => restQuantity(item._id)}
            disabled={item.qty === 1 ? true : false}
          >
            -
          </Button>
          {text}
          <Button onClick={() => addQuantity(item._id)}>+</Button>
        </Space>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Eliminar",
      key: "delete",
      render: (text, item) => (
        <Space size="middle">
          <a onClick={() => deleteItem(item._id)}>Eliminar</a>
        </Space>
      ),
    },
  ];
  const deleteItem = (id) => {
    const item = context.cart.products.filter((item) => item._id === id);
    const arrayAux = context.cart.products.filter((item) => item._id !== id);
    context.setCart({
      products: arrayAux,
      total: parseInt(context.cart.total - item[0].total),
    });
  };
  const addQuantity = (id) => {
    const item = context.cart.products.find((item) => item._id === id);
    const index = context.cart.products.findIndex((item) => item._id === id);
    item.qty = parseInt(item.qty) + 1;
    item.total = item.price * item.qty;
    console.log(item);
    const newArray = [...context.cart.products];
    let totalAux = 0;
    newArray[index] = item;
    newArray.map((item) => {
      return (totalAux = totalAux + item.qty * item.price);
    });
    console.log(totalAux);
    context.setCart({
      products: newArray,
      total: totalAux,
    });
  };
  const restQuantity = (id) => {
    const item = context.cart.products.find((item) => item._id === id);
    const index = context.cart.products.findIndex((item) => item._id === id);
    item.qty = parseInt(item.qty) - 1;
    item.total = item.price * item.qty;
    console.log(item);
    const newArray = [...context.cart.products];
    let totalAux = 0;
    newArray[index] = item;
    newArray.map((item) => {
      return (totalAux = totalAux + item.qty * item.price);
    });
    console.log(totalAux);
    context.setCart({
      products: newArray,
      total: totalAux,
    });
  };
  return (
    <div>
      <Table columns={columns} dataSource={context.cart.products} />
      <h2>Total del carrito: $ {context.cart.total}</h2>
    </div>
  );
}
