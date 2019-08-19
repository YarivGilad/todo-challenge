import React from 'react';
import PropTypes from 'prop-types'
import { throwStatement } from '@babel/types';

function ToDoItem(props) {
    
    // const [] = useState();
    state = {
        content: this.props
    }
  
    return (
      <div>
      <button>completed</button>
        <p>{props.item}</p>
        <button>remove</button>
      </div>
    )
}


// ToDoItem.propTypes = {
//   item: PropTypes.string
// }

export default ToDoItem;
