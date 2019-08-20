import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ToDoItem = (props) => {
    
  const [itemState,setItemState] = useState(
    {item: props.item}
  )

    return (
      <div>
      <CompleteButton onClick={setItemState}>completed</CompleteButton>
        <h1>{itemState.item}</h1>
        <RemoveButton>remove</RemoveButton>
      </div>
    )
}


ToDoItem.propTypes = {
  item: PropTypes.string
}

export default ToDoItem;

const CompleteButton = styled.button`
  background: #1DB954;
  color: white;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid #1DB954;
`
const RemoveButton = styled.button`
  background: #ff0000;
  color: white;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid #ff0000;
`
