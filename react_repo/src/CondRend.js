import React from "react";
const CondRend = () =>{
    let isWelcome = false;
    let a=4;
    return(
        <div>
            {a%2==0?<h1>Even Number</h1>:<h1>Odd Number</h1>}
        </div>
    )
};
export default CondRend;