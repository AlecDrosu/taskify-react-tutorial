import React from 'react'
import './styles.css'
import { Todo } from './model'
import SingleToDo from './SingleToDo';

interface Props {
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({toDos, setToDos}) => {
  return (
    <div className="todos">
        {toDos.map(todo => 
            <SingleToDo 
            todo={todo} 
            key={todo.id}
            todos={toDos}
            settodos={setToDos}
            />
        )}
    </div>
  )
}

export default ToDoList