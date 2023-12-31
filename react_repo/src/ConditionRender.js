import React from "react";
const ConditionRender = () =>{
    let isWelcome = false;
    let a=9;
    if(a%2==0)
    {
    return(
        <div>
            <h1> Even Number</h1>
        </div>
    )
    }
    else
    {
        return(
        <div>
            <h1> Odd Number</h1>
        </div>
        )
    }
};
export default ConditionRender;