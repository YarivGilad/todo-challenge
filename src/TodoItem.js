import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Form = ({ add_todo }) => {

     const [todo_text,set_todo_text] = useState('');

    const on_click = (event)=> {
      event.preventDefault();
      add_todo({
          text: todo_text,
          status : 'open'
      })
    }

    console.log('Text:',text)
    return (
      <div>
         <h1>Hello from TodoItem component</h1> 
         <form>
           <input onChange={(event)=>set_todo_text(event.target.value)} type="text" placeholder="what needs to be done"></input>
           <button onClick={on_click}>ADD</button>
         </form>

      </div>
    );
  };
  export default Form;


  Form.propTypes = {
    add_todo: PropTypes.func.isRequired,
  };
  
//   return (
//     <Box>
//       <Image src={avatar} />
//       <TextsBox>
//         <Title>
//           {first_name} from {country}
//         </Title>
//         <Msg>{description}</Msg>
//       </TextsBox>
//     </Box>
//   );
// };