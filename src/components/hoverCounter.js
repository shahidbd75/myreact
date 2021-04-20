import React, { Component } from 'react';

class HoverCounter extends Component {
    state = { count: 0 };

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        const { count } = this.state;
        return (
            <h1 type="button" onMouseOver={this.incrementCount}>
                Clicked {count} Times
            </h1>
        );
    }
}

export default HoverCounter;

// const HoverCounter = (props) => {
//     const { count, incrementCount } = props;
//     return (
//         <h1 type="button" onMouseOver={incrementCount}>
//             Clicked {count} Times
//         </h1>
//     );
// };

// export default withCounter(HoverCounter);
