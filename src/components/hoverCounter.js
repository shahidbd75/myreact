import React from 'react';
import withCounter from './HOC/withCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <h1 type="button" onMouseOver={incrementCount}>
            Clicked {count} Times
        </h1>
    );
};

export default withCounter(HoverCounter);
