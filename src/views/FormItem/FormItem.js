import React from "react";
import admin from "../../utils/admin";
import useForm from "../../hooks/useForm";
import { Form, Input, Button } from "antd";
import axios from "axios";
const FormItem = () => {
  const token = window.localStorage.getItem("token");
  const createProduct = (datos) => {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/item", datos, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
      });
  };
  const { inputs, handleInput, handleSubmit } = useForm(createProduct, {});

  return (
    <div>
      <h1>Añadir producto al inventario</h1>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onSubmitCapture={handleSubmit}
        onFinishFailed={"onFinishFailed"}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del producto"
          name="product_name"
          rules={[{ required: true, message: "¡Ingrese nombre del producto!" }]}
        >
          <Input onChange={handleInput} name="product_name" />
        </Form.Item>
        <Form.Item
          label="Descripción del producto"
          name="description"
          rules={[
            {
              required: true,
              message: "¡Ingrese una descripcion del producto!",
            },
          ]}
        >
          <Input onChange={handleInput} name="description" />
        </Form.Item>
        <Form.Item
          label="Precio del producto"
          name="price"
          rules={[
            {
              required: true,
              message: "¡Ingrese el precio del producto!",
            },
          ]}
        >
          <Input onChange={handleInput} name="price" type="number" />
        </Form.Item>
        <Form.Item
          label="Categoría"
          name="category"
          rules={[
            {
              required: true,
              message: "¡Ingrese una categoria del producto!",
            },
          ]}
        >
          <Input onChange={handleInput} name="category" />
        </Form.Item>
        <Form.Item
          label="Marca del producto"
          name="brand"
          rules={[
            {
              required: true,
              message: "¡Ingrese la marca del producto!",
            },
          ]}
        >
          <Input onChange={handleInput} name="brand" />
        </Form.Item>
        <Form.Item
          label="Imagen del producto (URL)"
          name="image"
          rules={[
            {
              required: true,
              message: "¡Ingrese una imagen del producto!",
            },
          ]}
        >
          <Input onChange={handleInput} name="image" />
        </Form.Item>
        <Form.Item
          label="SKU del producto"
          name="sku"
          rules={[
            {
              required: true,
              message: "¡Ingrese un SKU del producto!",
            },
          ]}
        >
          <Input onChange={handleInput} name="sku" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Añadir producto
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default admin(FormItem);
