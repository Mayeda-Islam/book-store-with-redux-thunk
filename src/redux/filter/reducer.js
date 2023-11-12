import { ALL } from "./actionType";
import { initalState } from "./initialState";

export const filterReducer = (state = initalState, action) => {
  console.log("from filter reducer");
  switch (action?.type) {
    case ALL:
      return state;
    default:
      return state;
  }
};
