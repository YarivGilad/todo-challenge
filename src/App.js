import React from 'react';
import TodoItem from './TodoItem'

function App() {
  const add_todo = (item)=> {
    console.log('itrm:',item);
  }
  return (
    <div className="App">
      {/* <header className="App-header"><h1>Todo App</h1></header> */}
      <TodoItem add_todo={add_todo}/>
    </div>
  );
}

export default App;
