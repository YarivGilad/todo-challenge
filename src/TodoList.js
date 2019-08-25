import React ,{ useContext}from 'react';
import { Context } from './store/store';
import { Button , Input , Form } from './elements';


const TodoList = () => {
   const {value , setValue , setInput , setTodos , todos , input} = useContext(Context);

    return (
       <Form onSubmit = {e => {
           e.preventDefault();
         setInput(value);
         if(input !== ''){
         setTodos([{input , complete:false , id:new Date()} , ...todos]);
          setValue('');
         }
       }}>
          <Input value = {value} onChange = {e => setValue(e.target.value)} />
          <Button type = 'submit'>add</Button> 
       </Form>
    )
}

export default TodoList;



