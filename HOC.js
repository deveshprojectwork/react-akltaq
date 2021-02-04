import React, { Component } from "react";

// -------AppUpLift CLASS--------------
class Parent extends Component {
  handleClick = event => {
    setColor("red"); //passing to parent
  };

  render() {
    return (
      <div>
        <h1>{}</h1>
        <Child color={color} onChildClick={handleClick} />
      </div>
    );
  }
}

class Child extends Component {
  clickHandler = event => {
    onChildClick(event.target.name); //passing to parent
  };
  render() {
    return (
      <div>
        <button onClick={clickHandler}>Chnange Color: {color}</button>
      </div>
    );
  }
}

export default Parent;
