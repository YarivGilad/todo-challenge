import React, { useState } from "react";
import styled from "styled-components";


const Filter = ({ input_list, on_filter, num_of_items}) => {
    const [selectedIndex, setSelectedIndex] = useState([])
    const num = num_of_items;
    let filtered_list = input_list;

    const filter_list = (filter_option,index) => {
        if (filter_option)
                filtered_list = input_list.filter(item => item.status === filter_option);
        else {
            filtered_list = input_list;
        }
        //callback on_filter with the new filtered_list~
        on_filter(filtered_list);
        setSelectedIndex(index);
    }

    return (
        <FilterBox>
            <Title>Filter by:</Title>
            <Button onClick={()=> filter_list('',0)} selected={selectedIndex === 0}>All</Button>
            <Button onClick={()=> filter_list("open",1)} selected={selectedIndex === 1}>Open</Button>
            <Button onClick={()=> filter_list("completed",2)} selected={selectedIndex === 2}>Completed</Button>
            <Button onClick={()=> filter_list("removed",3)} selected={selectedIndex === 3}>Removed</Button>
            <Counter>Showing <b>{num}</b> results out of {input_list.length}</Counter>
        </FilterBox>
    );
};

export default Filter;

const FilterBox = styled.div`
  background: aquamarine;
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
    font-size: 0.75rem;
`;

const Button = styled.button`
    padding: 0.2rem  2rem 0.2rem;
    border-radius: 5px;
    border: 1px solid white;
    outline: none;
    background: ${({selected})=> selected ? "wheat": null };
    &:hover{
        border-color: purple;
        cursor: pointer;
    }
`;