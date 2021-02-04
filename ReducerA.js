import React from "react";
import { connect } from "react-redux";
import {} from "./actions/myaction";
function ReducerA(props) {
  console.log(props);

  if (!props.myname) {
    props.myname == "";
  }
  return (
    <div className="App">
            <h1>UPDATE VAUES : {props.myname}</h1>
      <button
        onClick={() => {
          props.changeNameFuncation("Hiat");
        }}
      >
        {" "}
        change it{" "}
      </button>
      <button
        onClick={() => {
          props.addFuncation(10);
        }}
      >
        {" "}
        ADD{" "}
      </button>{" "}
            
    </div>
  );
}
//mapStateToProps -- this is to access data
const mapStateToProps = state => ({
  //({}) is used because we are passing as object
  myname: state.cname //state flow=>reducer>{props.myname} ,
});

//mapDispatchToProps -- this is to dispatch data
const mapDispatchToProps = dispatch => ({
  changeNameFuncation: cname => {
    //to call this we need to write :  props.changeName("hhhhh"), can write in componentDidMount()
    dispatch({ type: "CHANGE_NAME", payload: cname });
  },
  addFuncation: count => {
    dispatch({ type: "ADD", payload: count });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReducerA);
