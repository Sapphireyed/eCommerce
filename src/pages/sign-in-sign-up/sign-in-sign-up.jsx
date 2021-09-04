import React from 'react';
import SignIn from './../../components/sign-in-sign-up/signin.jsx'
import SignUp from './../../components/sign-in-sign-up/signUp.jsx'

import './sign-in-sign-up.scss';

const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUp;