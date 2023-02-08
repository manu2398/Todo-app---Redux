import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../store/todoReducer";
import Pagination from "./Pagination";
import SingleTodo from "./SingleTodo";

const Todos = () => {
  const { myTodos } = useSelector((state) => state);
  const { todos, pages: totalPages } = myTodos;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(getAllTodos(page));
    setPages(totalPages);
  }, [dispatch, page, totalPages]);

  return (
    <div>
      {todos?.length === 0 && <p>Oops! Nothing here..</p>}
      <div style={{ height: "300px" }}>
        {todos?.map((todo, idx) => (
          <SingleTodo todo={todo} />
        ))}
      </div>
      <Pagination page={page} changePage={setPage} pages={pages} />
    </div>
  );
};

export default Todos;
