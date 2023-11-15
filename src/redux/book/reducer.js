import { ADDED, DELETE, EDIT, LOADED } from "./actiontType";
import { initalState } from "./initialState";

export const bookReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADDED: {
      return { ...state, books: [...state, { ...action.payload }] };
    }
    case LOADED: {
      return { ...state, books: action.payload };
    }
    case DELETE: {
      const remainingBook = state.filter((book) => book.id !== action.payload);
      return { ...state, books: remainingBook };
    }
    case EDIT: {
      return { ...state, editableBook: action.payload };
    }
    default:
      return state;
  }
};
