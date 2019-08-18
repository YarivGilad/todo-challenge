import React from "react";
import styled from "styled-components";


const Filter = ({ input_list, on_filter, num_of_items}) => {
    let filtered_list = input_list;
    const num = num_of_items;
    const filter_list = (filter_option) => {
        switch(filter_option) {
            case "open":
                filtered_list = input_list.filter(item => item.completed === false && item.removed === false);
                break;
            case "completed":
                filtered_list = input_list.filter(item => item.completed === true && item.removed === false)
                break;
            case "removed":
                filtered_list = input_list.filter(item => item.removed === true);
                break;
            default:
                filtered_list = input_list;
            }
        //callback on_filter with the new filtered_list.

        on_filter(filtered_list);
    }

    return (
        <FilterBox>
            <Title>Filter:</Title>
            <Button variant="outline-primary" onClick={()=> filter_list("all")}>All</Button>
            <button variant="outline-primary" onClick={()=> filter_list("open")} >Open</button>
            <button variant="outline-primary" onClick={()=> filter_list("completed")} >Completed</button>
            <button variant="outline-primary" onClick={()=> filter_list("removed")} >Removed</button>
            <Counter><b>{num}</b> out of {input_list.length}</Counter>
        </FilterBox>
    );
};

export default Filter;


const FilterBox = styled.div`
  background: Cornsilk;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
    font-size: 0.75rem;
    font-weight: bold;
`;
const Counter = styled.p`

`;

const Button = styled.button`
    padding: 0rem  2rem 0rem;
    background: white;
`