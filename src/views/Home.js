import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Col, Row } from "antd";
import { useProductContext } from "../context/productContext";
import Item from "./Item";
export default function Home() {
  return <Item />;
}
