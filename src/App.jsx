import React, { useState , useEffect} from "react";
import Filter from './components/filter'
import data from './data/data.json';

const App  = () => {
    const [original_list, reset_list] = useState(data);
    const [filtered_list, on_filter] = useState(original_list);

    useEffect(()=>{
        console.log(filtered_list.length);
        console.log(filtered_list);
    })

    return (
        <Filter input_list={original_list} num_of_items={filtered_list.length} on_filter={on_filter}/>
    );
}
export default App;