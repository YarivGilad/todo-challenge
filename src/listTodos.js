import React, {useContext}from 'react';
import { Context } from './store/store';
import { Li , Btn , Ul , Span} from './elements';

const ListTodos = () => {
const {todos , setTodos} = useContext(Context);

const CompletedItem = i => setTodos(todos.map((todo , k) => k === i ? {
    ...todo,
     complete: !todo.complete
    } 
    : todo
    ));

const DeleteItem = id => setTodos(todos.filter(todo => todo.id!==id));
    

    return (
        <Ul>
                {todos.map(({input , id , complete} , i) => (
                    <Li>
                        <Span key = {id} type = {complete}>{input}</Span>
                        <div>
                           <Btn onClick = {() => CompletedItem(i)}>Complete</Btn>
                           <Btn type = {complete} onClick = {() => DeleteItem(id)}>Delete</Btn>  
                        </div>
                    </Li>
                ))}    
        </Ul>
    )
}

export default ListTodos



