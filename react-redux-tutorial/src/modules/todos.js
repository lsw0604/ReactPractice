import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입 정의 
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수 만들기

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; 
// insert가 호출될 때 마다 1씩 더해집니다.
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: "redux basic practice",
      done: true,
    },
    {
      id: 2,
      text: "redux basic use",
      done: false,
    },
  ]
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => 
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) => 
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) => 
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        draft.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id}) => 
      produce(state, draft => {
      const index = draft.todos.findIndex(todo => todo.id === id);
      draft.todos.splice(index, 1);
    }),
  },
  initialState
);

export default todos;