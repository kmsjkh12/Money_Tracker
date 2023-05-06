import React from "react";
import styled from "styled-components";
const Header = () =>{
    const member1 = {
        name: "test1",
        money: "50000"
        
    }
    return(
        <HeaderWrapper>
            <div className="header"></div>
            <Month>
                <div className="month_money">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;안녕하세요! {member1.name}</p>
                    <p>지난 1개월 간 사용한 돈</p>
                    <SepndMoney>₩{member1.money}</SepndMoney>
                </div>
            </Month>
            <Money>
                <Plus><p>들어온 돈</p>
                <p>+5000</p></Plus>
                <Vline></Vline>
                <Minus><p>나간 돈</p>
                <p>-4000</p></Minus>
            </Money>
        </HeaderWrapper>
    )
}
const HeaderWrapper = styled.div`
    heigth:600px;
    font-family: Impact, Charcoal, san-serif;
` 
const Month = styled.div`
    width:150px;
    margin-left:110px;
`
const SepndMoney = styled.span`
    margin-left:40px;
`
const Money = styled.div`
    background: #f5f5f6;
    border:1px solid #c8c8c8;
    border-radius: 10px;
    margin-left:100px; 
    margin-top:20px;
    display:flex;
    text-align:center;
`

const Plus = styled.div`
width:80px;
`
const Minus = styled.div`
width:80px;
`
const Vline =styled.div`
border-right : 1px solid #c8c8c8;
margin-top:15px;
    height : 60px;`
export default Header;