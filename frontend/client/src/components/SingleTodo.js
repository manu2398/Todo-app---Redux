import React, { useEffect, useState } from "react";
import { editTodo, removeTodo } from "../store/todoReducer";
import { useDispatch } from "react-redux";
import EditTodo from "./EditTodo";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdDone, MdRemoveDone } from "react-icons/md";

const SingleTodo = ({ todo }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const onDone = () => {
    setDone(!done);

    dispatch(editTodo({ ...todo, isDone: !done }));
  };

  const handleRemove = () => {
    if (window.confirm("Are you sure to remove todo?")) {
      dispatch(removeTodo(todo));
    }
  };

  useEffect(() => {
    setDone(false);
    if (todo.isDone) {
      setDone(true);
    }
  }, [todo.isDone]);

  return (
    <>
      <ul>
        <li className="todo_style">
          <strong style={{ textDecoration: done ? "line-through" : "" }}>
            {todo.title}
          </strong>
          <div className="todo_buttons">
            {done ? (
              <MdRemoveDone size={20} color="crimson" onClick={onDone} />
            ) : (
              <MdDone size={20} color="green" onClick={onDone} />
            )}

            <AiOutlineEdit size={20} onClick={() => setOnEdit(true)} />

            <AiOutlineDelete size={20} onClick={handleRemove} />
          </div>
        </li>
      </ul>

      {onEdit && <EditTodo todo={todo} onEdit={onEdit} setOnEdit={setOnEdit} />}
    </>
  );
};

export default SingleTodo;
