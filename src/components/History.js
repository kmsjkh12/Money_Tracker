import React from "react";
import styled from "styled-components";

const History = () =>{

    const history = [{
        type:"in",
        money:"50000",
        spend:"여행"
    },
    {
        type:"in",
        money:"50000",
        spend:"여행"
    }
    ,{
        type:"out",
        money:"5000",
        spend:"여행"
    }
    ,{
        type:"out",
        money:"43000",
        spend:"여행"
    }]
    return(
        <div>
            <button>전체내역</button>
            <button>수입</button>
            <button>지출</button>

            <div>
                {history.map((money)=>{
                    return(

                        <div>
                            <p>{money.type}</p>
                            <p>{money.spend}</p>
                            <p>{money.money}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default History;