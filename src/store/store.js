
import React , {useState} from 'react';

const Context = React.createContext();
const {Provider} = Context;



const Store = ({children}) => {
    const [todos , setTodos] = useState([]);
    const [toggle , setToggle] = useState(false);
    const [input , setInput] = useState('');
    const [value ,setValue] = useState('');


    const state = {
        todos,
        toggle,
        input,
        value
    };
    const action = {
        
        setToggle,
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