import React, {useContext}from 'react';
import { Context } from './store/store';
import styled from 'styled-components'


const ListTodos = () => {

    // const compledTodo = id => {
    //     const newTodos = [...todos];
    //     newTodos.find(id => {
    //         id,
    //         input,
    //
    //     }
    //     setTodos(newTodos);
    // }


    const {todos} = useContext(Context);
    return (
        <div className= 'container'>
                {todos.map(({input , id , complete}) => (
                    <DIV className ='cards-list'>
                        <Div key = {id}>{input} </Div>
                        <div>
                            <Btn >DAN</Btn>
                            <Btn>X</Btn>
                        </div>
                            
                    </DIV>
                ))}    
        </div>
    )
}

export default ListTodos


const Div = styled.div`


`;
const DIV = styled.div`
padding: 0.5rem 0.8rem;
    cursor: pointer;
    display: flex;
    // textDecoration: {complete ? 'line-through' : '' }
    
`;
const Btn = styled.button`
width: 200px;
height: 50px;
background: green;
borderRadius: 20%;
`;

