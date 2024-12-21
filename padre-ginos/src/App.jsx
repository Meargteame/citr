import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

import '../../public/style.css';
// import '../api/public/pizzas/pepperoni.webp';



const App = () => {
  return (
    <div>

      <h1>Padre Gino's Pizza – Order Now</h1>
      <Order/>

    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));