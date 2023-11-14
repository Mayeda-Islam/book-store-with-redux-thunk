import { FEATURE, RESETALL } from "./actionType";
import { initalState } from "./initialState";

export const filterReducer = (state = initalState, action) => {
  switch (action?.type) {
    case RESETALL:
      return { ...state, featured: false };
    case FEATURE: {
      return { ...state, featured: action.payload };
    }
    default:
      return state;
  }
};
