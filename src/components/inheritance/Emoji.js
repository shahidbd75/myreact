import React, { Component } from 'react';

class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(overrideText) {
        let text = 'I love reactjs';
        if (overrideText) text = overrideText;

        return <div>{text}</div>;
    }
}

export default Emoji;
