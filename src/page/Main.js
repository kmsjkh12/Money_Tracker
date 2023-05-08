import React from "react";
import Header from "../components/Header";
import History from "../components/History";
import styled from "styled-components";
const Main = () =>{
    return(
        <LayoutWrapper>
            <Inner>
            <Header />
            <History />
            </Inner>
        </LayoutWrapper>
    ) 
}
const LayoutWrapper = styled.div`
width: 375px;
border-radius: 35px;
box-shadow: 8px 8px 40px rgba(143, 143, 150, 0.55),
           -10px -10px 30px rgb(255, 255, 255, .8);

margin: 30px auto;`
const Inner = styled.div`
width: 100%;
height: 100%;
background: #f5f5f6;
border-radius: 35px;
box-shadow: inset -12px -12px 16px rgb(174, 174, 192, 0.32),
           inset 14px 14px 12px rgba(255, 255, 255);
padding: 0 22px 40px 22px;
display: flex;
flex-direction: column;
align-items: flex-start;
overflow: hidden;
`
export default Main;