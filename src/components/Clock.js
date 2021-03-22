import React, { Component } from 'react';
import Button from './Button';
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends Component {
    state = {
        date: new Date(),
        locale: 'en-US',
    };

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
        console.log('the button was clicked');
    };

    tick() {
        this.clockTimer = this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <div className="heading">
                    <span className="text-center">{date.toLocaleTimeString(locale)}</span>
                </div>
                {locale === 'en-US' ? (
                    <Button change={this.handleClick} locale="bn-BD" show={false} enable />
                ) : (
                    <Button change={this.handleClick} locale="en-US" show />
                )}
            </div>
        );
    }
}

export default Clock;
