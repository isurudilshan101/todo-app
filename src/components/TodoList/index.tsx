import React from 'react';

import { List } from 'antd';
import { ITodo } from '../../models/Todo';
import { TodoItem } from '../TodoItem';

interface ITodoListProps {
  todos: ITodo[];
  onTodoRemoval: (id: string) => void;
  onTodoToggle: (id: string) => void;

}

export const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onTodoRemoval,
  onTodoToggle,
}) => 

{
  return(
    
    <List
  
    locale={{
      emptyText: "There's nothing to do..",
    }}
    dataSource={todos}
    renderItem={(todo) => (
    
      <TodoItem
        todo={todo}
        onTodoToggle={onTodoToggle}
        onTodoRemoval={onTodoRemoval}
      />
    )}
    pagination={{
      position: 'bottom',
      pageSize: 10,
    }}
  />
  )
};
