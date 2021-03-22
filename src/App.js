import ClockList from './components/ClockList';

function App() {
    const quantities = [1, 2, 3]; // ['bn-BD', 'en-US', 'bn-BD'];
    return (
        <div>
            <ClockList quantities={quantities} />
        </div>
    );
}

export default App;
