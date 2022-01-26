import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Body.css";

export default function Body() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
        setItem(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemList = item.map((obj) => {
    return (
      <div className="col-md-4">
        <hr />
        <img src={obj.strMealThumb} className="img-fluid" />
        <p>Product ID: {obj.idMeal}</p>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>{obj.strMeal}</p>
        <hr />
      </div>
    );
  });

  return <div className="row">{itemList}</div>;
}
