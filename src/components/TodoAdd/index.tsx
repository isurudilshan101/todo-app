import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import { ITodo } from '../../models/Todo';
import { v4 as uuid } from 'uuid';

interface IAddTodoFormProps {
  setTodos: (todo: ITodo[]) => void;
  todos: ITodo[];
}

const AddTodoForm: React.FC<IAddTodoFormProps> = ({ setTodos, todos }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    setTodos([
      {
        title: form.getFieldValue('name'),
        isDone: false,
        id: uuid(),
      },
      ...todos,
    ]);

    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout='horizontal'>
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name={'name'}
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <input
              type='text'
              className='bg-gray-100 w-full py-1 px-4 rounded-lg'
              placeholder='Todo'
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <button type='submit' className='w-full bg-blue-400 py-2 rounded-lg'>
            <PlusCircleFilled /> Add Todo
          </button>
        </Col>
      </Row>
    </Form>
  );
};
export default AddTodoForm;
