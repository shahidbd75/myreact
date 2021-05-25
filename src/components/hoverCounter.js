import React from 'react';

const HoverCounter = ({ count, incrementCount, theme }) => {
    const style = theme === 'dark' ? { backgroundColor: '#000', color: '#FFF' } : null;
    return (
        <h1 style={style} onMouseOver={incrementCount}>
            Hover {count} Times
        </h1>
    );
};

export default HoverCounter;

// const HoverCounter = (props) => {
//     const { count, incrementCount } = props;
//     return (
//         <h1 type="button" onMouseOver={incrementCount}>
//             Clicked {count} Times
//         </h1>
//     );
// };

// export default withCounter(HoverCounter);
