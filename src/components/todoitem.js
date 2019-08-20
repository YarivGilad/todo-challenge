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
        <Item>{itemState.item}</Item>
        <RemoveButton>remove</RemoveButton>
      </div>
    )
}

// const setItemState = (itemState.Item) => <s>itemState.item</s>

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
  display: inline-block;
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
  display: inline-block;
`
const Item = styled.h1`
  color: #292929;
  display: inline;
`
