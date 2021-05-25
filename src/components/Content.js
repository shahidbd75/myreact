import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Counter from './Counter';
import HoverCounter from './hoverCounter';

const Content = () => (
    <div>
        <p>This is content</p>
        <Counter>
            {(count, incrementCount) => (
                <ThemeContext.Consumer>
                    {({ theme, switchTheme }) => (
                        <HoverCounter
                            count={count}
                            incrementCount={incrementCount}
                            theme={theme}
                            switchTheme={switchTheme}
                        />
                    )}
                </ThemeContext.Consumer>
            )}
        </Counter>
    </div>
);

export default Content;
