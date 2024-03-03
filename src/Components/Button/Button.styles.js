import styled from "styled-components";
export const Btn = styled.button`
width: 50px;
height: 50px;
background-color: gold;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
border: none;
outline: none;
color: #fff;
cursor: pointer;
transition: all ease-in .3s;
&:hover{
    color: gold;
    border: 2px solid gold;
    background-color: #fff;
    box-shadow: 10px 5px 20px -10px rgba(0, 0, 0, 0.3);
}
`;