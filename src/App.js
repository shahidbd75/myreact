import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter';
import User from './components/User';

function App() {
    return (
        <div className="App">
            <HoverCounter />
            <ClickCounter />
            <User render={(isLoggedIn) => (isLoggedIn ? 'Shahid' : 'Guest')} />
        </div>
    );
}

export default App;
