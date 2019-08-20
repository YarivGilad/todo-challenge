import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Global';
import TodoList from './TodoList';
import ListTodos from './listTodos';



function App() {
  return (
    <div className="App">
     <TodoList/> 
     <ListTodos/>
     <GlobalStyle/>
    </div>
  );
}

export default App;

