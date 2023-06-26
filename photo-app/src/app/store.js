import { combineRenderers, configureStore } from "@reduxjs/toolkit";
import photoReducer from "./../features/Photo/photoSlice"

const rootReducer = combineRenderers({
  photoReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;