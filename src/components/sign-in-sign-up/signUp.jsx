import React from 'react';
import FormInput from '../form-input/form-input.jsx'
import CustomButton from '../custom-button/custom-button.jsx'

import './signin.scss'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput className='form-input'
                        name='name'
                        value={ this.state.name}
                        label='Name'
                        onChange={ this.handleChange }
                        required
                    />
                    <FormInput className='form-input'
                        name='email'
                        type='email'
                        value={this.state.name}
                        label='email'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput className='form-input'
                        name='password'
                        type='password'
                        value={this.state.name}
                        label='Password'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput className='form-input'
                        name='password'
                        type='password'
                        value={this.state.name}
                        label='Confirm password'
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton>Sign up</CustomButton>
                </form>

            </div>
        )
    }

}

export default SignUp;