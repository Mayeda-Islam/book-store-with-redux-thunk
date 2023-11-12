import { combineReducers } from "redux";
import { bookReducer } from "./book/reducer";
import { filterReducer } from "./filter/reducer";

export const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});
