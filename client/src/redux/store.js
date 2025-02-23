import { createStore, combineReducers, applyMiddleware } from 'redux';
import { tickerReducer } from './reduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  ticker: tickerReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
