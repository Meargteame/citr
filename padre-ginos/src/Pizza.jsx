



const Pizza = (props) => {
    return React.createElement("h1", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("p", {}, props.description),
    ]);
  };



  export default Pizza;