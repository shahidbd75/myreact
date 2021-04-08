import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Form extends Component {
    state = {
        title: 'Java',
        description: 'I love react',
        library: 'React',
        isAwesome: true,
    };

    changeHandler = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                description: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        }
    };

    submitHandler = (e) => {
        const { title, description, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(`${title} + ${description}`, library, isAwesome);
    };

    render() {
        const { title, description, library, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.changeHandler}
                    />
                    <br /> <br />
                    <textarea
                        name="description"
                        value={description}
                        onChange={this.changeHandler}
                    />
                    <br />
                    <br />
                    <select name="language" value={library} onChange={this.changeHandler}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.changeHandler} />
                    <br />
                    <br />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}
