import { createStore } from "redux";
import reducers from "./reducers";
const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

const store = createStore(reducers, initialState);
export default store;
