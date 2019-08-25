
import React , {useState} from 'react';

const Context = React.createContext();
const {Provider} = Context;



const Store = ({children}) => {
    const [todos , setTodos] = useState([
        {id:1 , input:'sasha', complete:false},
        {id:2 , input:'ola' , complete:false}
    ]);
    const [input , setInput] = useState('');
    const [value ,setValue] = useState('');


    const state = {
        todos,
        input,
        value
    };
    const action = {
        setInput,
        setValue,
        setTodos
    };
    return (
        <Provider value = {{...state , ...action}}>
            {children}
        </Provider>
    );
};

export { Store , Context};