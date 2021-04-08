import { Component } from 'react';

class Bracket extends Component {
    addBracket = (text) => `[ ${text}]`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addBracket: this.addBracket });
    }
}

export default Bracket;
