import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Counter from './Counter';
import HoverCounter from './hoverCounter';

class Content extends React.Component {
    componentDidMount() {
        console.log(this.context);
    }

    render() {
        const { theme, switchTheme } = this.context;
        return (
            <div>
                <p>This is content</p>
                <Counter>
                    {(count, incrementCount) => (
                        <HoverCounter
                            count={count}
                            incrementCount={incrementCount}
                            theme={theme}
                            switchTheme={switchTheme}
                        />
                    )}
                </Counter>
            </div>
        );
    }
}

Content.contextType = ThemeContext;

export default Content;
