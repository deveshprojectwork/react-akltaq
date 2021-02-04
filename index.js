import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import CardDisplay from "./CardDisplay";
import CardFunction from "./CardFunction";
import "./home.css";

import family from "./family.json";
import MediaCard from "./MediaCard";
import AppUpLift from "./Redux/AppUpLift";
import ReducerA from "./ReducerA";
import ReduserBGet from "./ReduserBGet";
import Login from "./Login";

import { createStore } from "redux";
import { Provider } from "react-redux";
// -------------------PROJECT 0-------------
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       subject: 'React',
//       userList:[
//         {name:"devesh", age:40},
//         {name:"Elisha", age:30}
//       ]
//     };
//   }

//   submitOk = () =>{
//     alert("testis done");
//     document.getElementById("name").innerHTML = "ddfdfdf"
//   }

//   render() {

//     return (
//       <div>

//         <button onClick={this.submitOk}>dubit</button>
//         <p id="name"> </p>
//       </div>
//     )
//   }
// }

/* function Child() {
  return (
    <div>
      <p> this is m page</p>
      <button onClick={this.props.imysubmit}>SUbmit</button>
    </div>
  );
}

function Parent() {
  var handleDelete = () => {
    alert("hell");
  };
  return (
    <div>
      <p> this is m page</p>
      <Child onDelete={this.handleDelete} />
    </div>
  );
} */

// const Showme = <h1>Hello Hero!!!</h1>;

// ReactDOM.render(Showme, document.getElementById("root"));
// render(Showme, document.getElementById("root"));

// render(<Parent />, document.getElementById("root"));
// -------------------------PROJECT 1-------------------------
// -------Profile FUNCTION--------------
/* function Profile(props) {
  return <h1>This is Profile component. The name is= {props.name}</h1>;
}
// -------HOME CLASS--------------
class Home extends Component {
  state = {
    homename: "",
    city: ""
  };

  render() {
    console.log(this.props.city);

    var homelangtapu = "";
    if (this.props.city) {
      homelangtapu = (
        <p> YOU ARE HAVING BEAUTIFULL HOME IN {this.props.city}</p>
      );
    } else {
      homelangtapu = <p>You are home less</p>;
    }

    console.log(this.state.homename);
    return (
      <div>
        <h1>
          This is Home component and  homename:"Devesh" HOME -- APP -- PROFILE
        </h1>
        <button
          onClick={() => this.props.handlenamechild(this.state.homename)}
          name="submit"
        >
          submit
        </button>
        <h1>
          My home is {this.state.homename} and {homelangtapu}
        </h1>
      </div>
    );
  }
}

// -------AppUpLift CLASS--------------
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
          city="SWINDON"
        />
      </div>
    );
  }
}


render(<AppUpLift />, document.getElementById("root")); */

// -------------------------PROJECT REDUX-------------------------

/* function PreviousAddressRent(props) {
  return (
    <div>
      <p>Richar James Rent was take below rent.............</p>
        <p>{props.previousAddressRent.rent}</p>
        <p>{props.previousAddressRent.propertyOwner}</p>
      <br />

      <p>You will be working on this project. Plase confirm your joining date?</p>

      <h3>Thanks & Regards, </h3>
      <p>Devesh Srivastava</p>

    </div>
  );
}


// use of rest operator
function PreviousAddress(props) {
  return (
    <div>
      <h3>PreviousAddress</h3>
      <p>{props.previousAddress.city}</p>
      <PreviousAddressRent previousAddressRent={...props.previousAddressRent}/>
    </div>
  );
}

class AppUpLift extends Component {
  state = {
    name: "Vijay Michel Desuja",
    address: {
      street: "E 410 New palam vihar, Phase 2",
      city: "Gurgaon",
      state: "Haryana",
      country: "India"
    },

    previousAddress: {
      street: "F 78, Walton Grange, Old town",
      city: "Swindon",
      state: "Wildshire",
      country: "UK"
    },

     previousAddressRent: {
      rent: "£650",   
      propertyOwner: "Richard James",   
    }
  };
  render() {
    return (
      <div>
        <h2>OFFER LETTER</h2>
        <br />

        <p>Hello {this.state.name},</p>
        <p>
          This is to inform you that you have been short listed for current
          project.
          <br /> You are living be below address:
        </p>
        <h3>Address :</h3>
        <p>{this.state.address.street}</p>
        <p> {this.state.address.city}</p>
        <p> {this.state.address.state}</p>
        <p> {this.state.address.country}</p>

        <PreviousAddress previousAddress={this.state.previousAddress} previousAddressRent={this.state.previousAddressRent} />
      </div>
    );
  }
} */

class App extends Component {
  state = {
    isLogin: ""
  };
  render() {
    let sLogin = "";
    if (this.state.isLogin) sLogin = <p> Login Sucesfull</p>;
    else sLogin = <p> Login failed</p>;
    return (
      <div>
        <Login />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {sLogin}
        <ReducerA />
        updated value below
        <ReduserBGet />
      </div>
    );
  }
}

const initialState = {
  cname: "",
  count: 0
};

//reducer- pure funation that take state value and return new state
const reducer = (state = initialState, action) => {
  console.log("Index->Reducer", state, action);
  if (action.type === "CHANGE_NAME") {
    return {
      ...state, ////used to preserve the value
      cname: action.payload // ,
      // setState({isLogin:cname})
    };
  }

  if (action.type === "USER_NAME") {
    return {
      ...state, ////used to preserve the value
      cname: action.payload,
      setState({isLogin:cname})
    };
  }

  if (action.type === "ADD") {
    return {
      ...state, ////used to preserve the value
      count: action.payload + 1
    };
  }

  if (action.type === "MOGA_MBO") {
    return {
      ...state, ////used to preserve the value
      // cname: "action.payload"
       cname: action.payload
    };
  }
  console.log(state);
  return state;
};

//store have dispatch method and subscribe method
///single place for storing object
const store = createStore(reducer); //3 - storing reducer fucnation in store
// store.subscribe(() => {
//   console.log("state changes" + JSON.stringify(store.getState()));
// });
// console.log("inital state" + JSON.stringify(store.getState()));
// store.dispatch({ type: "AGE_DOWN", value: 10 });

// *********10/12/2020*** Revision and warm up*********************

  
  const Rooms1 = (props) => {
    return (
      <div className="droom1">
        <h2 >Rooms1 for {props.roomname}</h2>
      </div>
    );
  }

  const Rooms2 = (props) => {
    return (
       <div className="jroom2">
            <h2>Rooms2 for {props.roomname}</h2>
            <div style={{background : 'blue'}}>
                <h1>I have beautiful house in Swindon</h1>
            </div>
            <div>
              <input type="text" Placeholder="enter user details"/>
              <input type="password" Placeholder="enter password"/>
              <button >SUBMIT</button>
            </div>
      </div>
    );
  }

  const Greeting = ({name, ...props}) =>{
    const {id, clasName, userArray} = props;
    console.log(props);
    console.log(props.id); //getting spread operator
    console.log(props.className); //getting spread operator 
    console.log(props.userListArray);  //getting array in page
    console.log(props.userListObject);  //getting array in page
    return (
      <div 
        {...props}>{name} <br/>
        {props.userListArray[0]}
      </div>
    );
  }

  const Home = () => {
    let userArray = ["Devesh", "Rohit", "Vinod"] //userArray
    let userObject = {name:"Devesh", city:"Mumbai"} //userObject
    return (
      <>
      <h2>HOME</h2>
      <Rooms1 roomname="Devesh" />
      <Rooms2 roomname="Jyoti"/>
      <Greeting name="fany Pants" id="user-greeting"       className="fancy-greeting" userListArray={userArray} 
      userListObject={userObject} />
      </>
    );
  }


render(
    <Provider store={store}>
      <Home />     
    </Provider>,
  document.getElementById("root")
);


