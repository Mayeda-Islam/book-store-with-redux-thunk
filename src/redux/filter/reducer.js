import { ALL, FEATURE } from "./actionType";
import { initalState } from "./initialState";

export const filterReducer = (state = initalState, action) => {
  switch (action?.type) {
    case ALL:
      return action.payload;
    case FEATURE: {
      const featuredBooks = action.payload.filter((book) => book.featured);
      return featuredBooks;
    }
    default:
      return state;
  }
};
