import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";

export default function configureStore() {
  return createStore(reducers, applyMiddleware(thunk));
}
