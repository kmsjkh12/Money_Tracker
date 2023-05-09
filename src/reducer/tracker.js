import React from "react";

export const INSERT = "INSERT";
export const DELETE = "DELETE";

const initialstate = { 
    plus:100000,
    minus:48000,
    history:[{
        id:4,
        type:"수입",
        money:50000,
        spend:"여행",
        date:"2023-05-07",
    },
    {
        id:3,
        type:"수입",
        money:50000,
        spend:"여행",
        date:"2023-05-07",
    }
    ,{
        id:2,
        type:"지출",
        money:5000,
        spend:"여행",
        date:"2023-05-07",
    }
    ,{
        id:1,
        type:"지출",
        money:43000,
        spend:"여행",
        date:"2023-05-07",
    }]
}

export const tracker = (state = initialstate, action) =>{
    switch(action.type){
        case INSERT:
            const tag =action.data.type;
            return{
                ...state,
                history:[action.data, ...state.history],
                plus :tag==="수입" ? state.plus +parseInt(action.data.money): state.plus,
                minus:tag==="지출" ? state.minus +parseInt(action.data.money): state.minus,
            }
        case DELETE:
            const data =state.history.find(data=>data.id ===action.data);
            console.log(data);
            return{
                ...state,
                history:state.history.filter(data =>data.id !==action.data),
                plus :data.type==="수입" ? state.plus -parseInt(data.money): state.plus,
                minus:data.type==="지출" ? state.minus -parseInt(data.money): state.minus,
            }
        default:
            return state
    }
}