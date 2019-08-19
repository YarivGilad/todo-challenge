import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ToDoItem = (props) => {
    
  
  
  const [itemState,setItemState] = useState(
    {item: props.item}
  )
    
  

    return (
      <div>
      <button onClick={setItemState}>completed</button>
        <h1>{props.item}</h1>
        <button>remove</button>
      </div>
    )
}


ToDoItem.propTypes = {
  item: PropTypes.string
}

export default ToDoItem;

const button = styled.button`
  background: #1DB954;
  color: white;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid #1DB954;
`
