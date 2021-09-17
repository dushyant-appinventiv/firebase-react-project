// import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { applyMiddleware, createStore, compose } from "redux";
// import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
// import { firebaseConfig } from "../firebase/firebaseConfig";

export const store = createStore(
  rootReducer,
  //   when applying middleware,it returns store enhancers , we can combine
  // several store enhancers like reducers
  compose(
    applyMiddleware(thunk)
    // reduxFirestore(firebaseConfig)
    // reactReduxFirebase(firebaseConfig)
  )
  //   we pass firebase config so that our reduxfirebase knows which database to deal with
);
