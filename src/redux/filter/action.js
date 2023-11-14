import { FEATURE, RESETALL, SEARCHTEXT } from "./actionType";

export const resetAll = () => {
  return {
    type: RESETALL,
  };
};
export const feature = (featured) => {
  return {
    type: FEATURE,
    payload: featured,
  };
};
export const searchByText = (text) => {
  return {
    type: SEARCHTEXT,
    payload: text,
  };
};
