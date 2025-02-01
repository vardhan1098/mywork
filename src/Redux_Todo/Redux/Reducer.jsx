export const initialState = {
  todos: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddTodo":
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        completed: false,
        date: new Date().getTime().toString(),
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case "DeleteTodo":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case "EditTodo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };
    case "ToogleDone":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        ),
      };

    default:
      return state;
  }
};
