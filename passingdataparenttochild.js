// ----------Passeing value (Parent to Child) Using Call-backs---------------------------------
class Parent extends Component {
  state = { message: "" };

  callbackFunction = callData => {
    this.setState({ message: callData });
  };

  render() {
    return (
      <div>
        <Child1 parentCallback={this.callbackFunction} />
        {this.state.message}
      </div>
    );
  }
}

class Child1 extends Component {
  state = { message: "" };
  sendData = () => {
    this.props.parentCallback("Hey! How are you?");
  };

  render() {
    return (
      <div>
        <button onClick={this.sendData}>Send to Parent </button>
      </div>
    );
  }
}

//>>>>>>>>redux, context api >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Summary : Child1 has to send message — “SSup brother??” to Child2
// App
// ├── Child1
// └── Child2

/* Steps:
Step1: Create a Provider Component for the two children
Step 2: Pass both(the state and the callback function) as props to all children inside the Provider Component
Step 3: Use MyProvider component as a Parent to the two children — Child1, Child2.
Step 4: Implement the desired result in the same manner, but this time, using ContextObject.Consumer as explained below: */

render(<Parent />, document.getElementById("root"));
