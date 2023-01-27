import React from 'react';

class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onUsernameChangeHandler(event) {
        this.setState(() => {
            return {
                username: event.target.value
            }
        })
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.login({
            username: this.state.username,
            password: this.state.password
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className='container login__input'>
                <input type="text" placeholder='Username' value={this.state.username} onChange={this.onUsernameChangeHandler} />

                <input type='password' placeholder='Password' value={this.state.password} onChange={this.onPasswordChangeHandler} />

                <button className='btn'>Masuk</button>
            </form>
        )
    }
}

export default LoginInput;
