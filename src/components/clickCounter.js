import React, { Component } from 'react';

class ClickCounter extends Component {
    state = { counter: 0 };

    incrementCount = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    render() {
        const { counter } = this.state;
        return (
            <button type="button" onClick={this.incrementCount}>
                Clicked {counter} Times
            </button>
        );
    }
}

export default ClickCounter;
