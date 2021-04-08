import React, { Component } from 'react';

class HoverCounter extends Component {
    state = { counter: 0 };

    incrementCount = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    render() {
        const { counter } = this.state;
        return (
            <h1 type="button" onMouseOver={this.incrementCount}>
                Clicked {counter} Times
            </h1>
        );
    }
}

export default HoverCounter;
