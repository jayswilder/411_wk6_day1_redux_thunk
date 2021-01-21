import React, { Component } from 'react'
import {
    TextField,
    Button,
    Container
} from '@material-ui/core'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleTextChange = (e) => {
        const state = { ...this.state }
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    login = (e) => {
        e.preventDefault()
        document.cookie = 'loggedIn=true;max-age=60*10000';
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    <form className="login-form" onSubmit={this.login}>
                        <br />
                        <br />
                        <br />
                        <TextField
                            required
                            onChange={this.handleTextChange}
                            value={this.state.username}
                            name="username"
                            label="Username"
                            type="text" />
                        <br />
                        <br />
                        <TextField
                            required
                            onChange={this.handleTextChange}
                            value={this.state.password}
                            name="password"
                            label="Password"
                            type="password" />
                        <br />
                        <br />
                        <Button
                            type="submit"
                            className="login-button"
                            variant="contained"
                            color="primary">Login</Button>
                    </form>
                </Container>
            </div>
        );
    }
}

export default Login;