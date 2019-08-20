import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Form = ({ add_todo }) => {

  const [todo_text, set_todo_text] = useState('');

  const on_click = (event) => {
    event.preventDefault();
    add_todo({
      text: todo_text,
      status: 'open'
    })
  }

  // console.log('Text:',text)
  return (
    <Warpper>
      <h1>My todo Up</h1>
      <TodoItem>
        <input onChange={(event) => set_todo_text(event.target.value)} type="text" placeholder="what needs to be done"></input>
        <button onClick={on_click}>ADD</button>
      </TodoItem>
    </Warpper>
  );
};
export default Form;


Form.propTypes = {
  add_todo: PropTypes.func.isRequired,
};

const Warpper = styled.form`

      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      /* width: 50%; */
      margin: 10px 200px;
      padding: 2px;
      border: 2px gray solid;
`;

const TodoItem = styled.form`

      display: flex;
      justify-content: center;
      margin: 10px;
      color: papayawhip;
      font-size: 10rem;
      width: 50%;
      background: slategray;

`;





// const Text = styled.h1`
//   font-size: 3rem;
//   font-weight: normal;
//   font-family: "Griffy", cursive;
//   color: papayawhip;
//   cursor: pointer;
//   user-select: none;
//   position: relative;
// `;