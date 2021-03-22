import Clock from './Clock';

function ClockList({ quantities = [] }) {
    return (
        <div>
            {quantities.map((i) => (
                <Clock key={i} />
            ))}
        </div>
    );
}

export default ClockList;
