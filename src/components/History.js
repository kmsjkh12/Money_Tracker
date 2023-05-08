import React ,{useCallback, useState} from "react";
import styled from "styled-components";

const History = () =>{
    const history = [{
        type:"수입",
        money:50000,
        spend:"여행",
        date:"2023-05-07"
    },
    {
        type:"수입",
        money:50000,
        spend:"여행",
        date:"2023-05-07"
    }
    ,{
        type:"지출",
        money:5000,
        spend:"여행",
        date:"2023-05-07"
    }
    ,{
        type:"지출",
        money:43000,
        spend:"여행",
        date:"2023-05-07"
    }]
    const [Bstate, setBstate] = useState("");
    const type =["전체내역", "수입", "지출"];

            //새로운 배열을 생성해 토글 제어

    const onClickButton = useCallback((t)=>{
        setBstate(t);
        console.log(Bstate)
    },[type])
    return(
        <div>
            {type.map((t,index)=>{
                return(
                    <button 
                    onClick={()=>{onClickButton(t)}}
                    >
                        {t}
                    </button>
                )
            })}
            <HistoryWrapper>
                {history.map((money)=>{
                    if(Bstate==="전체내역"){
                        return(
                            <HistoryItem>
                                <Left>
                                <Date>{money.date}</Date>
                                <Spend>{money.spend}</Spend>
                                </Left>
                                <Right>
                                <Money>{money.type === "수입" ? "+" : "-"}{money.money}</Money>
                                </Right>
                            </HistoryItem>
                        )
                    }
                    else if(money.type===Bstate){
                        return(
                            <HistoryItem>
                            <Left>
                            <Date>{money.date}</Date>
                            <Spend>{money.spend}</Spend>
                            </Left>
                            <Right>
                            <Money>{money.type === "수입" ? "+" : "-"}{money.money}</Money>
                            </Right>
                        </HistoryItem>
                        )
                    }
                    
                })}
            </HistoryWrapper>
        </div>
    )
}

const HistoryWrapper = styled.div`
    align-center:center;
    width:380px;
`
const HistoryItem = styled.div`
    display:flex;
    width:100%;
    height:50px;
    border-radius: 10px;
    box-shadow: 8px 8px 40px rgba(143, 143, 150, 0.55),
           -10px -10px 30px rgb(255, 255, 255, .8);
`
const Left = styled.div`
    padding-top:5px;
    padding-left:10px;
    width:80px;
`

const Right = styled.div`
    position:relative;
    left:220px;
    `
const Spend = styled.span`
    font-size:15px;
    
`
const Money = styled.p`

`
const Date  = styled.span`
    font-size:12px;
    color:#a9a9a9;
`
export default History;