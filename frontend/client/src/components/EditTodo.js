import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../store/todoReducer";

const EditTodo = ({ todo, onEdit, setOnEdit }) => {
  const [editValue, setEditValue] = useState("");
  const dispatch = useDispatch();

  const handleEditTodo = (e) => {
    e.preventDefault();
    if (todo.title === editValue || !editValue.trim()) return;

    dispatch(editTodo({ ...todo, title: editValue }));
    setOnEdit(false);
  };

  useEffect(() => {
    if (onEdit) setEditValue(todo.title);
  }, [onEdit, todo.title]);

  return (
    <dialog open={onEdit ? true : false}>
      <article>
        <header>
          <p
            aria-label="Close"
            className="close"
            onClick={() => setOnEdit(false)}
          ></p>
          Edit
        </header>
        <form onSubmit={handleEditTodo}>
          <textarea
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            rows={3}
          />
          <button type="submit">Update</button>
        </form>
      </article>
    </dialog>
  );
};

export default EditTodo;
