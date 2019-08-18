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
            <Title>Filter by:</Title>
            <Button onClick={()=> filter_list()}>All</Button>
            <Button onClick={()=> filter_list("open")} >Open</Button>
            <Button onClick={()=> filter_list("completed")} >Completed</Button>
            <Button onClick={()=> filter_list("removed")} >Removed</Button>
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
    &:hover{
        background-color: wheat;
        border-color: purple;
        cursor: pointer;
    }
`;