import { AppThunk } from "../../models/app-thunk";
import { Todo } from "../reducers/todo.reducer";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";

import * as types from "../types/types";
import { firestore } from "../../configs/firebase";

export const getTodos = (): AppThunk => {
  return async (dispatch) => {
    dispatch({
      type: types.TODO_GET_IS_SUBMITTING,
    });

    try {
      const q = query(
        collection(firestore, "Todo"),
        orderBy("FechaCreacion", "desc")
      );

      const docsResponse = await getDocs(q);

      const todos = docsResponse.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch({
        type: types.TODO_GET_SUCCESS,
        payload: todos,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.TODO_GET_FAILURE,
        payload: "Algo salio mal, intentelo nuevamente",
      });
    }
  };
};

export const addTodo = (todo: string): AppThunk => {
  return async (dispatch) => {
    dispatch({
      type: types.TODO_ADD_IS_SUBMITTING,
    });

    try {
      const docRef = doc(collection(firestore, "Todo"));
      await setDoc(docRef, {
        Contenido: todo,
        FechaCreacion: serverTimestamp(),
      });

      const dbDoc = await getDoc(docRef);

      const todoDb = {
        id: docRef.id,
        ...dbDoc.data(),
      };

      dispatch({
        type: types.TODO_ADD_SUCCESS,
        payload: todoDb,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.TODO_ADD_FAILURE,
        payload: "Algo salio mal, intentelo nuevamente",
      });
    }
  };
};

// export const deleteTodo = (id: number): Action => ({
//   type: types.DELETE_TODO,
//   payload: id,
// });
