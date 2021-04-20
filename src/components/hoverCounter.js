import React from 'react';

const HoverCounter = ({ count, incrementCount }) => (
    <h1 type="button" onMouseOver={incrementCount}>
        Hover {count} Times
    </h1>
);

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
