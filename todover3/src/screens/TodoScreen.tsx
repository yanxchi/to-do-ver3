import React, {useState} from 'react'
import { todo } from '../model'
import TodoInput from '../components/TodoInput'

const TodoScreen = () => {
    
    const [todo, setTodo] = useState<string>("")
    const [allTodo, setAllTodo] = useState<todo[]>([])
    const handleAdd = (e:React.FormEvent) =>{
        e.preventDefault();
        setAllTodo([...allTodo, {id: Date.now(), content:todo, isDone:false }]);
        const allTodoObject = JSON.stringify(allTodo);
        sessionStorage.setItem('allTodo', allTodoObject);
        setTodo("");
    }
    
    return (
    <div className = "TodoScreen">
        <TodoInput todo = {todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  )
}

export default TodoScreen