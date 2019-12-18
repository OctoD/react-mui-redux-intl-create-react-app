import user from "./user";
import ui from "./ui";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({
    user,
    ui
  }),
  composeWithDevTools()
);

export type ApplicationState = ReturnType<typeof store["getState"]>;

export default store;
