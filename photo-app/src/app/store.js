import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import photoReducer from "../features/Photo/photoSlice"

const rootReducer = combineReducers({
  photoReducer,
});
const store = configureStore({
  reducer: rootReducer,

  middleware: [ThunkMiddleware],
});

export default store;
