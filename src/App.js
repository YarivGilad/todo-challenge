import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './global.styles'

// import React, { useState } from 'react';



// const Todos = ({ children }) =>{
//   const [item, setItem] = useState;
// }


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
