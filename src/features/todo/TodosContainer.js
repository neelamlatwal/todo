import { useSelector, useDispatch } from 'react-redux';
import {selectLists, addItemInTodo} from "./todoSlice"
import TodoList from "./TodoList"
import { useEffect, useState } from 'react';

function TodosContainer() {
    const todoLists = useSelector(selectLists);
    const dispatch = useDispatch();

  
    const addTodo =()=>{
       const defaultData  = {
            keyword:"keyword",
            label:"test",
            action:"Invoke Flow", 
            choosen_flow :"delay"
          }

          dispatch(addItemInTodo(
            defaultData
          ))
    }
    return (
        <div className="employee-list">
            <div className="p-2 d-flex justify-content-between">
                <h4>Keywords</h4>
                <div>
                    <button  className="btn btn-success " onClick={addTodo}>
                        Add keywords
                    </button>
                    <button className='add-icon '>
                       +
                    </button>
                </div>

            </div>
            <TodoList
                todos={todoLists}
            />
        </div>
    )
}
export default TodosContainer;