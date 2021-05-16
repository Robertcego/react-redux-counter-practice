import { INCREMENT, DECREMENT } from "../actions/index";

const initialState = {
  count: 0,
};

//! _________ !//
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        count: state.count - 1,
      };
    }

    default:
      return state;
  }
}
