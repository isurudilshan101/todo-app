import React, { useState } from 'react';
import AddTodoForm from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { appName, ITodo } from './models/Todo';

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onTodoRemoval = (id: string) => {
    setTodos((todos) => todos?.filter((todo) => todo?.id !== id));
  };

  const onTodoToggle = (id: string) => {
    const mapedTodos = todos?.map((todo) => {
      if (todo?.id === id) {
        todo.isDone = !todo?.isDone;
      }
      return todo;
    });

    setTodos(mapedTodos);
  };

  return (
    <div className='container m-auto mt-10'>
      <AddTodoForm setTodos={setTodos} todos={todos} />
      <TodoList
        todos={todos}
        onTodoRemoval={onTodoRemoval}
        onTodoToggle={onTodoToggle}
      />
    </div>
  );
}
