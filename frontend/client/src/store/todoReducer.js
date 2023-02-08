import {
  deleteDataAPI,
  getDataAPI,
  patchDataAPI,
  postDataAPI,
} from "../utils/fetchData";

// types
const TODO_TYPES = {
  ADD_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  GET_ALL_TODOS: "GET_ALL_TODOS",
};

// actionTypes

export const createTodo = (input) => async (dispatch) => {
  const newTodo = {
    title: input,
    isDone: false,
  };

  const res = await postDataAPI("todo", newTodo);
  dispatch({ type: TODO_TYPES.ADD_TODO, payload: res.data });
};

export const getAllTodos = (page) => async (dispatch) => {
  const res = await getDataAPI(`todo?page=${page}`);
  dispatch({ type: TODO_TYPES.GET_ALL_TODOS, payload: res.data });
};

export const editTodo = (todo) => async (dispatch) => {
  dispatch({ type: TODO_TYPES.UPDATE_TODO, payload: todo });
  await patchDataAPI(`todo/${todo._id}`, todo);
};

export const removeTodo = (todo) => async (dispatch) => {
  dispatch({ type: TODO_TYPES.REMOVE_TODO, payload: todo });
  await deleteDataAPI(`todo/${todo._id}`, todo);
};

//reducer
const initialState = {
  todos: [],
  count: 0,
  page: 0,
  pages: 0,
};
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_TYPES.GET_ALL_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
        count: action.payload.results,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case TODO_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case TODO_TYPES.UPDATE_TODO:
      return {
        ...state,
        todos: [...state.todos].map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };

    case TODO_TYPES.REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(
          (todo) => todo._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
