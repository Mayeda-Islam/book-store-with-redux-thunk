import { FEATURE, RESETALL } from "./actionType";

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
