import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;

        if (nextChange === currentChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale, show, enable } = this.props;
        if (!enable) return null;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                {show && <h2>Hello Clock</h2>}
            </>
        );
    }
}

export default Button;
