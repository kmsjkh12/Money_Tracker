import React ,{useCallback, useState} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { DELETE } from "../reducer/tracker";
const History = () =>{

    const dispatch = useDispatch();
    const [Bstate, setBstate] = useState("전체내역");
    const type =["전체내역", "수입", "지출"];
    const { history } = useSelector((state)=>state.tracker);
    
    const onClickButton = useCallback((t)=>{
        setBstate(t);
        console.log(Bstate)
    },[type])

    const onDelete = useCallback((data)=>{
        dispatch({
            type:DELETE,
            data:data
        })
    },[])
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
                            <HistoryItem type={money.type} >
                                <Text>
                                <Left>
                                <Date>{money.date}</Date>
                                <Spend>{money.spend}</Spend>
                                </Left>
                                <Right>
                                {money.type === "수입" ? <Money >+{money.money}</Money> : <Money>-{money.money}</Money>}
                                </Right>
                                </Text>
                                <EditButton onClick={()=>{
                                    onDelete(money.id)
                                }}> <DeleteOutlined style={{fontSize:"30px"
                                ,position:"relative", top:"10px"
                            }} /></EditButton>
                            </HistoryItem>
                        )
                    }
                    else if(money.type===Bstate){
                        return(
                            <HistoryItem type={money.type}>
                            <Left>
                            <Date>{money.date}</Date>
                            <Spend>{money.spend}</Spend>
                            </Left>
                            <Right>
                            {money.type === "수입" ? <Money>+{money.money}</Money> : <Money>-{money.money}</Money>}
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
    width:400px;
`
const HistoryItem = styled.div`
    position:relative;
    display:flex;
    width:100%;
    height:50px;
    border-radius: 10px;
    box-shadow: 8px 8px 40px rgba(143, 143, 150, 0.55),
           -10px -10px 30px rgb(255, 255, 255, .8);
    border-right:
    ${props=> 
        props.type==="수입" ? "10px solid green": "10px solid red"
    }}
    transition : .3s;
    margin : 20px auto;
    overflow: hidden;
    text-align : center;
    transition : .2s;
    cursor : pointer;
`

const Text = styled.div`
    color : black;
    width:400px;
    transition : .3s;
    margin-left :10px;
    &:hover{
        margin-left:-10px;
    }
    &:hover .btn{
        left:50px;
    }
    `
const Left = styled.div`
    padding-top:5px;
    padding-left:10px;
    width:80px;
`
const Right = styled.div`
    width:90px;
    position:relative;
    top:-45px;
    left:280px;
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

const EditButton = styled.div`
    position : relative;
    width : 50px;
    height : 50px;
    left:50px;
    background : #d63638;
    transition : .3s;
    ${HistoryItem}:hover & {
        left:0px;
    }
`
export default History;