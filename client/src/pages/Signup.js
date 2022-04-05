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
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    name="username"
                    id="username"
                    type="username"
                    placeholder='Your username'
                    value={username}
                    onChange={handleFormChange}
                />
                <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder='Your email'
                    value={email}
                    onChange={handleFormChange}
                />
                <input
                    name='password'
                    id="password"
                    type="password"
                    placeholder='*******'
                    value={password}
                    onChange={handleFormChange}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
            {/*error && <div>Sign up failed</div>*/}
        </div>
    );
}

export default Signup;