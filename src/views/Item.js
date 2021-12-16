import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProductContext } from "../context/productContext";
import { Row, Col, Skeleton } from "antd";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import "./item.css";
const Item = () => {
  const context = useProductContext();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchQuery = query.get("search");
  return (
    <div className="container_item">
      <h1>Nuestros Productos</h1>
      {context.products ? (
        <Row
          justify="space-around"
          align="middle"
          gutter={[16, 50]}
          style={{ margin: "20px" }}
        >
          {searchQuery === null
            ? context.products.map((item) => (
                <Col xs={20} sm={10} md={8} lg={5} xl={5}>
                  <Card item={item} />
                </Col>
              ))
            : context.products
                .filter((p) =>
                  p.product_name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <Col xs={20} sm={10} md={8} lg={5} xl={5}>
                    <Card item={item} />
                  </Col>
                ))}
          {}
        </Row>
      ) : (
        <Skeleton active />
      )}
    </div>
  );
};
export default Item;
