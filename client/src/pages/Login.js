import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, } from 'react-bootstrap';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { error }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { email: email, password: password }
            });

            Auth.login(data.login.token);
            setEmail("");
            setPassword("");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="d-flex flex-row justify-content-center" >
            <form onSubmit={handleFormSubmit} style={{ width: "50%" }}>
                <div className="d-flex flex-column align-items-start pt-5" style={{ width: "100%" }}>
                    <h2 className="h2">Welcome back!</h2>
                    <h3 className="h3">Sign into your account.</h3>
                    <label htmlFor="email">Email:</label>
                    <input className="mr-5 mb-5"
                        style={{ width: "70%" }}
                        name="email"
                        onChange={handleFormChange}
                        type="email"
                        id="email"
                        placeholder='Your email'
                        value={email}
                    />
                    <label htmlFor="password">Password:</label>
                    <input className="mr-5 mb-5"
                        style={{ width: "70%" }}
                        name="password"
                        onChange={handleFormChange}
                        type="password"
                        id="password"
                        label="Password"
                        placeholder='*******'
                        value={password}
                    />
                    <div className="d-flex justify-content-center" style={{ width: "65%" }}>
                        <button type='submit' className="ml-5 p-2 rounded border-dark shadow">
                            Submit
                        </button>
                    </div>
                    <div className = 'd-flex justify-content-start align-items-center' style={{width: '65%', paddingTop: '50px'}}>
                        <p className="mr-4 text-center">Don't have an account? </p>
                        <Button variant="secondary" href="/signup">Sign up</Button>
                    </div>
                </div>
            </form>
            {error && <div>Login failed</div>}

        </div>
    );
}

export default Login;