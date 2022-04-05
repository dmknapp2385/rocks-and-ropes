import React, { useState } from 'react';
//import { useMutation } from '@apollo/client';
//import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [login, { error }] = useMutation(LOGIN_USER);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        }
        else {
            setPassword(value);
        }
    }


    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // const { data } = await login({
            //     variables: { email: email, password: password }
            // });

            //Auth.login(data.login.token);
            setEmail("");
            setPassword("");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    name="email"
                    onChange={handleFormChange}
                    type="email"
                    id="email"
                    placeholder='Your email'
                    value={email}
                />
                <input
                    name="password"
                    onChange={handleFormChange}
                    type="password"
                    id="password"
                    placeholder='*******'
                    value={password}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
            {/*error && <div>Login failed</div>*/}
        </div>
    );
}

export default Login;