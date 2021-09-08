import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
function TodoList() {


  const todos = useSelector(state => state.TodoReducer.todos)
  const status= useSelector(state => state.TodoReducer.status)
    return (
        <div className='container '>
            { 
            status==='All'?
            todos.map((todo)=><TodoItem key={todos.id} todo={todo}/>):
            status==='Done'?
            todos.filter(elt=>elt.completed===true).map((todo)=><TodoItem key={todos.id} todo={todo}/>):
            todos.filter(elt=>elt.completed===false).map((todo)=><TodoItem key={todos.id} todo={todo}/>)
        }
             
        </div>
    )
}
export default TodoList
