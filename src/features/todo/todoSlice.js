import { createSlice } from '@reduxjs/toolkit';
import { redirect } from "react-router-dom";

const initialState = {
  lists:[
    {
    id:1,
    keyword:"A",
    label:"Absbsb",
    action:"Invoke Flow", //ssa
    choosen_flow:"delay", //ssa
    message:""
  },
  {
    id:2,
    keyword:"rrr",
    label:"qweqwew",
    action:"Invoke Flow", //ssa
    choosen_flow:"ssa", //ssa
    message:""
  }
]
};


export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      console.log(action);
      const updatatedTodo = [...state.lists].map((item)=>{
        if(item.id === action.payload.id){
            return action.payload
        } else {
            return item
        }
      })
      state.lists = [...updatatedTodo]
     
    },
    addItemInTodo :(state, action) => {
      
        const totalTodos = state.lists.length+1;
      
        const defaultData = {
            id: totalTodos,
            keyword:`keyword_${totalTodos}`,
            label:`label_${totalTodos}`,
        };
        state.lists = [...state.lists, {...action.payload, ...defaultData }]
        
    },
    deleteItemInTodo :(state, action) =>{
        const updatatedTodo = [...state.lists].filter((item)=> item.id !== action.payload)
          state.lists = [...updatatedTodo]
    }
     
  }
});

export const { updateTodo, addItemInTodo, deleteItemInTodo } = todoSlice.actions;


export const selectLists = (state) => state.todoList.lists;


export default todoSlice.reducer;
