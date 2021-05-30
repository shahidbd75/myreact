import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Counter from './Counter';
import HoverCounter from './hoverCounter';

const Content = () => {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
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
};

export default Content;
