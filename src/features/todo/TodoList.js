import React from "react";
// import Todo from './Todo'
import { Link, redirect, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemInTodo, selectLists } from "./todoSlice";

const TodoList = ({ todos, onDoneHandler, onDeleteHandler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoLists = useSelector(selectLists);
  const handleDelete = (id) => {
    dispatch(deleteItemInTodo(id));
    redirect(`/todos/${todoLists[0].id}`);
  };
  return (
    <div className="list-section">
      {todos.length === 0 && <div>There are no todos.</div>}
      {todos.length > 0 && (
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index} className="p-3">
                <Link to={`/todos/${todo.id}`} >
                  <div className="d-flex justify-content-between">
                    <div className="list-item">
                    <div> Key : {todo.keyword}</div>
                    <div> Desc :{todo.label}</div>
                    </div>
                    <div>
                      <button onClick={() => handleDelete(todo.id)} className=" btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
