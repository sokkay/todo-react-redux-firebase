import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todo.action";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>();

  const handleAdd = () => {
    dispatch(addTodo(todo!));
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAdd();
          setTodo("");
        }}
      >
        <input
          value={todo}
          onChange={(event) => {
            if (event.target.value) {
              setTodo(event.target.value);
            } else {
              setTodo("");
            }
          }}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};
