import styled from 'styled-components';

export const Span = styled.span`
color: red;
font-size:40px;
text-decoration:${props => props.type  ? 'line-through' : ''};
color:${props => props.type  ? 'white' : 'red'} ;
`;


