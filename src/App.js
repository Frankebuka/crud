import React from "react";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
