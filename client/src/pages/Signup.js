import React, { useState } from 'react';
//import { useMutation } from '@apollo/client';
//import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormChange = event => {
        const [name, value] = event.target;
        if (name === 'username') {
            setUsername(value);
        }
        else if (name === 'email') {
            setEmail(value);
        }
        else {
            setPassword(value);
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // const { data } = await addUser({
            //   variables: { username: username, email: email, password: password }
            // });

            //Auth.login(data.addUser.token);\

            setUsername("");
            setPassword("");
            setEmail("");

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="d-flex flex-row justify-content-center" >
            <form onSubmit={handleFormSubmit} style={{ width: "50%" }}>
                <div className="d-flex flex-column align-items-start pt-5" style={{ width: "100%" }}>
                    <h2 className="h2">Welcome!</h2>
                    <h3 className="h3">Create an account.</h3>
                    <label htmlFor="username">Username:</label>
                    <input className="mr-5 mb-5"
                        style={{ width: "70%" }}
                        name="username"
                        id="username"
                        type="username"
                        placeholder='Your username'
                        value={username}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input className="mr-5 mb-5"
                        style={{ width: "70%" }}
                        name="email"
                        id="email"
                        type="email"
                        placeholder='Your email'
                        value={email}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input className="mr-5 mb-5"
                        style={{ width: "70%" }}
                        name='password'
                        id="password"
                        type="password"
                        placeholder='*******'
                        value={password}
                        onChange={handleFormChange}
                    />
                    <div className="d-flex justify-content-center" style={{ width: "65%" }}>
                        <button type='submit' className="ml-5 p-2 rounded border-dark shadow">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            {/*error && <div>Sign up failed</div>*/}

        </div>
    );
}

export default Signup;