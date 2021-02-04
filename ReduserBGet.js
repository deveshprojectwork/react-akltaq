import React from "react";
import { connect } from "react-redux";
function ReduserBGet(props) {
  console.log("VIJAY " + props.myname);
  console.log("AMAR " + props.ccccount);
  
  return (
    <div className="App">
            <h1>Get State in  : {props.myname} and the count is {props.ccccount}</h1>
    </div>
  );
}
//mapStateToProps -- this is to access data
const mapStateToProps = state => {
  return {
    myname: state.cname, //state flow=>reducer>{props.myname}
    ccccount: state.count
  };
};

export default connect(mapStateToProps)(ReduserBGet);
