import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './global.styles'
import All_challenge from './....'

const Todo = React.createContext();


const Todos = ({ children }) => {
  const [form, setForm] = useState([]);
  const [list, setList] = useState([]);
  const [selected_list, setSelected_List] = useState([]);
  const [remooved_list, setRemooved_list] = useState([]);
  const [filtered, setFiltered] = useState({});

useEffect(() => {
  get_initial_list();
}, []);
  
  const get_initial_list = async () => {
    try {
      const data = await all_challenge.get_all_challenges();// כל השלבים שהיתחברו : form,list,filter
      setForm([]);
      setList([]);
      setSelected_List([]);
      setRemooved_list([]);
      setFiltered([ ]);
      
    } catch (err) {     
    console.error(error);
    
  };
    const state = {
      setList,
      setSelected_List,
      setRemooved_list,
      setFiltered,
    };

    const actions = {
      setSelected_List,
      setRemooved_list,
      setFiltered
    }

  return (
   
    <Container>
      <H1>TODO LIST</H1>
       <Todo value = {{ ...state, ...actions }}> {children} </Todo>
      <GlobalStyles/>
      <Placeholder>
        Form 
      </Placeholder>
      <Placeholder>
        List
      </Placeholder>
      <Placeholder>
        Filter
      </Placeholder>
    </Container>
  );
}

export default App;

const H1 = styled.h1`
text-align: center;
font-size: 50px`;

const Container = styled.div`
  border:red 3px solid;
  
`;
const Placeholder = styled.div`
  border:blue 3px dashed;
  font-size: 13rem;
`;



function App() {
  return (
    
    <Container>
      <H1>TODO LIST</H1>

      <GlobalStyles/>
      <Placeholder>
        Form
      </Placeholder>
      <Placeholder>
        List
      </Placeholder>
      <Placeholder>
        Filter
      </Placeholder>
    </Container>
  );
}

export default App;

const H1 = styled.h1`
text-align: center;
font-size: 50px`;

const Container = styled.div`
  border:red 3px solid;
  
`;
const Placeholder = styled.div`
  border:blue 3px dashed;
  font-size: 13rem;
`;
