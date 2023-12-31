import React, { Component } from "react";
class Event extends Component {
    myFunction = () => {
        alert("Hello GFG");        
    }
    render() {
        return(
            <div>
                <button type="button" onClick={this.myFunction}>Click Me</button>
            </div>
        )
    }
}
export default Event;