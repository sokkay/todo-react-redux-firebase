import { Action } from '../../models/action';
import * as types from '../types/types';

export enum FormState {
  Initial = 'Initial',
  Submitting = 'Submitting',
  Success = 'Success',
  Failure = 'Failure',
}

export interface Todo {
  id: string;
  Contenido: string;
  FechaCreacion: any;
}

export interface TodoState {
  todoList: Todo[];
  state: FormState;
  error?: string;
  add: {
    state: FormState;
    error?: string;
  };
  // agregar delete object
}

const initialState: TodoState = {
  todoList: [],
  state: FormState.Initial,
  add: {
    state: FormState.Initial,
  },
  //delete, inicializar el objeto con state en initial
};

export default function reducer(
  state = initialState,
  action: Action
): TodoState {
  switch (action.type) {
    case types.TODO_GET_INITIAL:
      return {
        ...state,
        todoList: [],
        state: FormState.Initial,
      };
    case types.TODO_GET_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
        state: FormState.Success,
      };
    case types.TODO_GET_IS_SUBMITTING:
      return {
        ...state,
        state: FormState.Submitting,
        error: undefined,
      };
    case types.TODO_GET_FAILURE:
      return {
        ...state,
        state: FormState.Failure,
        error: action.payload,
      };

    case types.TODO_ADD_INITIAL:
      return {
        ...state,
        add: {
          state: FormState.Initial,
          error: undefined,
        },
      };
    case types.TODO_ADD_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        add: {
          state: FormState.Success,
        },
      };
    case types.TODO_ADD_IS_SUBMITTING:
      return {
        ...state,
        add: {
          state: FormState.Submitting,
          error: undefined,
        },
      };
    case types.TODO_ADD_FAILURE:
      return {
        ...state,
        add: {
          state: FormState.Failure,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
