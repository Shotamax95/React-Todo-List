import React, { useState } from 'react';
import './App.css';
import {InputTodo} from './components/InputTodo'; 
import {IncompleteTodos} from './components/IncompleteTodos'; 
import {CompleteTodos} from './components/CompleteTodos'; 

export const App = () =>{
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // Add todo
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    /* 
    spread operation example.
    const arr1 = [10, 20]
    const arr2 = [30, 40] 
    const allArr = [...arr1, ...arr2]  output: [10, 20 30, 40] <= Good one
    But if const allArr = [arr1, arr2] output: [Array(2), Array(2)] <= Bad one
    */
  };

  // Delete
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // Complete
  const onClickComplete = (index) => {
    // delete from incomplete-area
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // reset incompleteTodos
    setIncompleteTodos(newIncompleteTodos);

    
    // generate into complete-area from incomplete-area
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // set completeTodos
    setCompleteTodos(newCompleteTodos);
  };

  // Return
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return(
  <>
  <InputTodo 
    todoText={todoText} 
    onChange={onChangeTodoText} 
    onClick={onClickAdd}
    disabled={incompleteTodos.length >= 5}
    />
  {incompleteTodos.length >= 5 && (
  <p style={{ color: 'red' }}>
    You can register 5 todos
  </p>
  )}
  <IncompleteTodos todos = {incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
  <CompleteTodos todos = {completeTodos} onClickBack={onClickBack}/>
  </>
  );
};

