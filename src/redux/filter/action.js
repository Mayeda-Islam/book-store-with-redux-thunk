import { ALL, FEATURE } from "./actionType";

export const all = (allBooks) => {
  return {
    type: ALL,
    payload: allBooks,
  };
};
export const feature = (allBooks) => {
  return {
    type: FEATURE,
    payload: allBooks,
  };
};
