"use client";

import { useState  } from "react";

export default function Page() {
    const [ newTodo, setNewTodo ] = useState('');
    const [ todos, setTodos ] = useState([]);
    
    
   const addTodo = ()=> {
        setTodos([
            ...todos,
             { 
                "title":newTodo
            }
        ]);
        
    };
    
    const deleteTodo = (item) => {
        setTodos(todos.filter((item, i) => i !== todos.length - 1));
    };
    
    return (
        <div className="container flex flex-col items-center justify-center  mx-auto  px-4 mt-10">
            <div className="flex flex-col mt-12 justify-center items-center">
                <h1 className="font-bold my-6 "> Todos </h1>
                <div className="mx-2">
                    <label>todo:</label>
                    <input type="text" name="newtodo" className="shadow border-solid border-current mx-6" id="todo" onChange={(e) => setNewTodo(e.target.value)}></input>
                    <button className="mx-2 " onClick={ addTodo }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                
            </div>
            <div className="flex flex-col mt-4">
                
            { todos.map( (item,i) => (    
                <div key={i} className="flex flex-row pt-4 col-span-2">
                    <span className="divide-y pr-2 mr-2">{item.title}</span>
                    <button className="mx-2 " onClick={ ()=>deleteTodo(item.title) }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            ))}
            </div>
        </div>  
    );
    
  }