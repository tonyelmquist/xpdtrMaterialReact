//src/redux/reducers.js
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export const initialState = {};

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
