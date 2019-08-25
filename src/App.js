import React , {useContext} from 'react';
import {Context} from './store/store';
import GlobalStyle from './Global';
import TodoList from './TodoList';
import ListTodos from './listTodos';
import Title from './title';
import { DivAppTitle , DivContainer , ClearButton} from './elements';




function App() {
  const {setTodos} = useContext(Context);
  return (
    <DivAppTitle>
      <DivContainer>
      <Title/>
      <TodoList/> 
     <ListTodos/>
     <ClearButton onClick = {() =>setTodos([]) }>Clear all Todos</ClearButton>
      </DivContainer>
     <GlobalStyle/>
    </DivAppTitle>
  );
}

export default App;
