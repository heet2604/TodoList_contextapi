import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            title: "Todo message",
            completed : false,
        }
    ],
    addTodo : (todo)=>{},            //just initialize the function and write its content in the App.js
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;