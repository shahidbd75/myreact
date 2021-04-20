import ClickCounter from './components/clickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/hoverCounter';

function App() {
    return (
        <div className="App">
            {/* <HoverCounter /> */}
            {/* <ClickCounter /> */}
            {/* <User render={(isLoggedIn) => (isLoggedIn ? 'Shahid' : 'Guest')} /> */}

            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
