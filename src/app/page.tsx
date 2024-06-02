'use client'

import React from 'react'
import AddTodoInput from '@/components/add-todo-input'
import AddTodoButton from '@/components/add-todo-button'
import TodoItem from '@/components/todo-item';
import Todo from '@/models/todo';

export default function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [todo, setTodo] = React.useState<Todo>({
    id: crypto.randomUUID(),
    done: false,
    name: ''
  });

  return (
    <div className="flex flex-col gap-4 p-12 border rounded-lg w-full max-w-[600px]">
      <div className="flex gap-4">
        <AddTodoInput onChange={(name) => setTodo({
          ...todo,
          name: name,
        })} />
        <AddTodoButton onClick={() => {
          setTodos([
            ...todos,
            todo,
          ])

          setTodo({
            id: crypto.randomUUID(),
            done: false,
            name: '',
          })
        }} />
      </div>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            done={todo.done}
            name={todo.name}
            onChecked={() => setTodos(todos.map((innerTodo) => {
              if (innerTodo.id != todo.id) {
                return innerTodo
              }
              return {
                ...innerTodo,
                done: !innerTodo.done,
              }
            }))}
          />
        ))}
      </div>
    </div>
  );
}
