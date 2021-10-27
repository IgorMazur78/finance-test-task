import { ADDTICKER } from './constants';

export const addTicker = value => {
  return {
    type: ADDTICKER,
    payload: { value },
  };
};
