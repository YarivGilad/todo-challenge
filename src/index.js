import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filter from './components/filter'
import data from './data/data.json';
import * as serviceWorker from './serviceWorker';

const on_filter  = filtered_list => {
    console.log(filtered_list.length);
    console.log(filtered_list);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Filter input_list={data} on_filter={on_filter}/>, rootElement);

