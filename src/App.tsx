import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import ToDoList from './components/ToDoList';

function printName(name: string) {
  console.log(name);

}

printName('John Doe');

const App = () => {
  const [toDo, setToDo] = useState<string>("")
  const [toDos, setToDos] = useState<Todo[]>([])
  console.log(toDo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      const newTodo: Todo = {
        id: new Date().getTime(),
        name: toDo,
        isCompleted: false
      }

      setToDos([...toDos, newTodo]);
      setToDo("");
    }
  };

  console.log(toDos)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} setToDos={setToDos} />

    </div>
  );
}

export default App;
