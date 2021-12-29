import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

export default createStore(rootReducer, applyMiddleware(thunk));
