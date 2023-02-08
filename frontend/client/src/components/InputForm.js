import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/todoReducer";

const InputForm = () => {
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.length > 60) {
      setErr("Max 60 characters are allowed");
      setTimeout(() => {
        setErr("");
      }, 3000);
      return;
    }

    dispatch(createTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Enter todo</label>
      <input
        type="text"
        name="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Walk the dog"
      />
      {err && (
        <small style={{ color: "crimson", fontSize: "12px" }}>{err}</small>
      )}
      <button type="submit" role="button">
        Add
      </button>
    </form>
  );
};

export default InputForm;
