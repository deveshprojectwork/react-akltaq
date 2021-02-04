import React, { Component } from "react";

function Profile(props) {
  return (
    <div>
             <h1>This is Profile component. The name is= {props.name}</h1>
          
    </div>
  );
}

class Home extends Component {
  state = {
    homename: "Devesh"
  };
  render() {
    return (
      <div>
                  
        <h1>
          This is Home component and  homename:"Devesh" --HOME -- APP -- PROFILE
        </h1>
                  
        <button
          onClick={() => this.props.handlenamechild(this.state.homename)}
          name="submit"
        >
          submit
        </button>
                
      </div>
    );
  }
}

class AppUpLift extends Component {
  state = {
    name: "ramesh"
  };
  changename(cname) {
    console.log("App", cname);
    this.setState({
      name: cname
    });
  }
  render() {
    return (
      <div>
                     
        <Profile name={this.state.name} />
                    <h1> Hi is App page and name is= {this.state.name}</h1>
                                
        <Home
          handlenamechild={cname => {
            this.changename(cname);
          }}
        />
                  
      </div>
    );
  }
}
export default AppUpLift;
