import { combineReducers } from 'redux';

/**
 * Import your reducers here
 */
import { reducer as itemReducer } from './itemReducer';

/**
 * Combine reducers allows you to import many reducers from your components
 * and add them here to then access them in your store.
 */
const appReducer = combineReducers({
	itemReducer,
});

export default appReducer;