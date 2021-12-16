import React from "react";
import "./card.css";
import NoImage from "../../img/nodisponible.png";
import { useHistory } from "react-router-dom";
export default function Card({ item }) {
  const history = useHistory();
  return (
    <div>
      <div className="card" onClick={() => history.push(`/items/${item._id}`)}>
        <img src={item.image ? item.image : NoImage} alt="product"></img>
        <h2>{item.product_name}</h2>
        <h3>$ {item.price}</h3>
      </div>
    </div>
  );
}
