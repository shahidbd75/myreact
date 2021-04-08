import { Component } from 'react';

class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addEmoji: this.addEmoji });
    }
}

export default Emoji;
