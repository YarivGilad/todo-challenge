import styled from 'styled-components';

export const Button = styled.button`
font-size:20px;
padding: 5px;
box-shadow: 5px 5px rgba(0 , 0 , 0 , 0.4) ;
border-radius:10px;
background: green;
color:white;
left:  20px;
`;

export const Btn = styled(Button)`
    margin-right:10px; 
    border: 1px solid red;
    cursor:${props => props.type ? 'not-allowed' : ''}
    `;
export const ClearButton = styled(Button)`
width: 100%;

`;