import aar from "redux-aar";
import * as actions from "./actions";

const reducer = aar.createReducer({
  asideopen: false
});

reducer.on(actions.closeaside, state => {
  return {
    ...state,
    asideopen: false
  };
});

reducer.on(actions.openaside, state => {
  return {
    ...state,
    asideopen: true
  };
});

reducer.on(actions.toggleaside, state => {
  return {
    ...state,
    asideopen: !state.asideopen
  };
});

export default reducer.reduce();
