import React from "react";
import { Todo } from "./model";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineDone } from "react-icons/md";
import "./styles.css";
import { useState } from "react";

interface Props {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleToDo: React.FC<Props> = ({ todos, settodos, todo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState(todo.name);

  const handleDone = (id: number) => {
    settodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    settodos(todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                name: editTodo
            }
        } else {
            return todo
        }
        
    }))
    setEdit(false)
  }

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input className="input__todo" value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
      ) : todo.isCompleted ? (
        <s className="todos__single--text">{todo.name}</s>
      ) : (
        <span className="todos__single--text">{todo.name}</span>
      )}
      <div className="icons">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isCompleted) {
              setEdit(!edit);
            }
          }}
        >
          <FaEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
