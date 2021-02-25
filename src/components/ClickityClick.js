// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component{
    constructor(){
        super()

        this.state= {

        }
    }

    handleClick= () => {
        this.setState({
            hasBeenClicked: true
        })
    }

    render(){
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} has been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick
