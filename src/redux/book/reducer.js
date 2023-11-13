import { ADDED, DELETE, LOADED } from "./actiontType";
import { initalState } from "./initialState";

export const bookReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADDED: {
      return [...state, action.payload];
    }
    case LOADED: {
      console.log(action.payload, "from book reducer");
      return action.payload;
    }
    case DELETE: {
      const remainingBook = state.filter((book) => book.id === action.payload);
      return remainingBook;
    }
    default:
      return state;
  }
};
