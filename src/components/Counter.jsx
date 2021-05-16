import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "../actions/index";

//! ------ !//
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Counter(props) {
  return (
    <div style={style}>
      <button
        onClick={() =>
          props.count > 0
            ? props.dispatch({ type: DECREMENT })
            : "Can´t render negatives"
        }
      >
        -
      </button>
      <p>{props.count}</p>
      <button onClick={() => props.dispatch({ type: INCREMENT })}>+</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
