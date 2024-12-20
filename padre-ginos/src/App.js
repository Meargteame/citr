import React  from "react";
import { createRoot } from "react-dom";






// functional component

const App = () => {
  // debugger;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    }),
    React.createElement(Pizza, {
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    }),
  ]);
};

const container = document.getElementById("root");

//   telling where to render out app component
const root = createRoot(container);
//   rendering the given component in the given place
root.render(React.createElement(App));
