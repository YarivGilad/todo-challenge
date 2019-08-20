import React ,{ useContext}from 'react';
import { Context } from './store/store';

const TodoList = () => {
   const {value , setValue , setInput , setTodos , todos , input} = useContext(Context);

    return (
       <form onSubmit = {e => {
           e.preventDefault();
         setInput(value);
         if(input != ''){
         setTodos([{input , complete:false , id:new Date()} , ...todos]);
          setValue('');
         }
       }}>
          <input value = {value} onChange = {e => setValue(e.target.value)} />
          <button >add</button> 
       </form>
    )
}

export default TodoList
