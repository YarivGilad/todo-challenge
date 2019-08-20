import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ToDoItem = ({completeFunc,removeFunc,item}) => {
    
    return (
      <div>
      <CompleteButton onClick={()=> completeFunc(item.id)}>completed</CompleteButton>
        <Item completed={item.status==='completed'}>{item.text}</Item>
        <RemoveButton onClick={()=> removeFunc(item.id)}>remove</RemoveButton>
      </div>
    )
}


ToDoItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['open', 'completed','removed']).isRequired
  }).isRequired,
  completeFunc: PropTypes.func.isRequired,
  removeFunc: PropTypes.func.isRequired
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
  text-decoration: ${({completed})=> completed? 'line-through' : 'none'};
`
