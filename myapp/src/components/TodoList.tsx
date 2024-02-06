//in ToDoList.tsx
import * as React from 'react'
import TodoItem from './TodoItem'
import { TodoListInterface } from "../interface"
const ToDoList = (props: TodoListInterface) => {
 return (
 <div className="todo-list">
 <ul>
 {props.todos.map((todo) => (
 <li key={todo.id}>
 <TodoItem
 todo={todo}
 handleTodoUpdate={props.handleTodoUpdate}
 handleTodoRemove={props.handleTodoRemove}
 handleTodoComplete={props.handleTodoComplete}
 
 />
 </li>
 ))}
 </ul>
 </div>
 )
}
export default ToDoList