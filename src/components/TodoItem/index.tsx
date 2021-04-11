import React from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { ITodo } from '../../models/Todo';

interface ITodoItemProps {
  todo: ITodo;
  onTodoRemoval: (id: string) => void;
  onTodoToggle: (id: string) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onTodoRemoval,
  onTodoToggle,
}) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.isDone ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            size='small'
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo?.id)}
            defaultChecked={todo.isDone}
          />
        </Tooltip>,
        <Popconfirm
          title='Are you sure you want to delete?'
          onConfirm={() => {
            onTodoRemoval(todo?.id);
          }}
        >
          <button className='bg-red-400 text-white px-3 py-1 rounded-full'>
            DELETE
          </button>
        </Popconfirm>,
      ]}
      className={`${
        todo?.isDone ? 'bg-green-300' : 'bg-gray-100'
      } my-2 rounded-xl`}
      key={todo.id}
    >
      <div className={`p-3`}>{todo.title}</div>
    </List.Item>
  );
};
