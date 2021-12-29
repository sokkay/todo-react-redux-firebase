import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';

export const rootReducer = combineReducers({
  todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
