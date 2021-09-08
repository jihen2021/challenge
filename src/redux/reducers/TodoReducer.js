const initialState = {
  todos: [
    { id: 1, title: " chekpoint redux", completed: true },
    { id: 2, title: " chekpoint css", completed: false },
    { id: 3, title: "chekpoint html", completed: true },
  ],
  status: "All",
};

const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case "EDIT":
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === payload ? { ...elt, title: elt.title } : elt
        ),
      };

    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === payload ? { ...elt, completed: !elt.completed } : elt
        ),
      };
    
    
    case "FIND":
      return { ...state, status: payload };
      default:
      return state;
  }
};
export default TodoReducer;
