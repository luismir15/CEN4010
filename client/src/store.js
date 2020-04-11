import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
