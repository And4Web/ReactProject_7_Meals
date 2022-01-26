import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Body() {
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>I am Body...</h1>
    </div>
  );
}
