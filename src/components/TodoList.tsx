import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../redux/actions/todo.action";
// import { deleteTodo } from '../redux/actions/todo.action';
import { RootState } from "../redux/reducers/rootReducer";
import { FormState, TodoState } from "../redux/reducers/todo.reducer";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList, state, error } = useSelector<RootState, TodoState>(
    (state) => state.todoReducer
  );

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {state === FormState.Failure && <p>{error}</p>}
      {state === FormState.Success ? (
        <ul>
          {todoList.map((value) => {
            return (
              <li key={value.id} style={{ marginTop: 10, marginBottom: 10 }}>
                <span>{value.Contenido}</span>
                {/* <button onClick={() => dispatch(deleteTodo(value.id))}>
                  Eliminar
                </button> */}
              </li>
            );
          })}
        </ul>
      ) : (
        <h6>...Cargando</h6>
      )}
    </div>
  );
};
