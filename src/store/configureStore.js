import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { restaurantReducer } from '../reducers/restaurant';

// export default function configureStore(initialState) {
//   return createStore(rootReducer, initialState);
// }

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
                  restaurantReducer,
                  composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};