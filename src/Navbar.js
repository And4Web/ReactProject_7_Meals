import React from "react";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1>React Meals</h1>
      <a
        href="#"
        style={{ marginRight: "20px", textDecoration: "none", color: "white" }}
      >
        Home
      </a>
      <a
        href="#"
        style={{ marginRight: "20px", textDecoration: "none", color: "white" }}
      >
        Order
      </a>
      <a
        href="#"
        style={{ marginRight: "20px", textDecoration: "none", color: "white" }}
      >
        Contact Us
      </a>
    </div>
  );
}
