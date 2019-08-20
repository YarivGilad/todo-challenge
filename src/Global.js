import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
body{
    html,
body {
    height: 100%;
}
html {
    font-size: 10px;
}
.container {
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    background: papayawhip;
    marginBottom: 10px;
    background: -moz-linear-gradient(
            top,
            #f5f5dc 0%,
            #d2b48c 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
            top,
            #f5f5dc 0%,
            #d2b48c 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
            to bottom,
            #f5f5dc 0%,
            #d2b48c 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /*border:aqua dashed 3px; */
    /*color:papayawhip*/
}
}
.app {
    background: Cornsilk;
    padding: 10.5rem 1.5rem 1.5rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0.4rem 1.5rem DimGrey;
    position: relative;
    margin-top: 7rem;
    min-width: 60rem;
}
`;

export default GlobalStyle;