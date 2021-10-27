import { ADDTICKER } from './constants';
const initial = {
  tickers: [],
};
export const tickerReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case ADDTICKER:
      return { ...state, tickers: payload.value };

    default:
      return state;
  }
};
