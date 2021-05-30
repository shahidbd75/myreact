import React, { Component } from 'react';
import ClickCounter from './components/clickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './context/ThemeContext';

class App extends Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'dark',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return { theme: 'light' };
                }
                return { theme: 'dark' };
            });
        },
    };

    render() {
        return (
            <div className="App">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
