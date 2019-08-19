import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ToDoItem = (props) => {
    
    // const [] = useState();
    // state = {
    //     content: this.props
    // }
  
    return (
      <Wrapper>
      <button>completed</button>
        <h1>{props.item}</h1>
        <button>remove</button>
      </Wrapper>
    )
}


ToDoItem.propTypes = {
  item: PropTypes.string
}

export default ToDoItem;




const Wrapper = styled.button`
  background: green;
  border-radius: 3px;
  border: none;
  color: white;
`
