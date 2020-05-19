import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor() {
        super();
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        const options = {
            happy: 'sad',
            sad: 'happy'
        }

        this.setState({
            mood: options[this.state.mood]
        })
    }

    render() {
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent;