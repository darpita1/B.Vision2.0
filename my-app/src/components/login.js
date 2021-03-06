import 'bulma/css/bulma.css';
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";


export default function Login() {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const { login } = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        //console.log(usernameRef);
        try {
            console.log(usernameRef.current.value);
            console.log(passwordRef.current.value);
            setError("");
            setLoading(true);
            let a = await login(usernameRef.current.value, passwordRef.current.value);
        } catch {
            setError("Account credentials are wrong");
        }
        
        setLoading(false);
    }

    return (<div className="login-container">
            <form className="loginform" onSubmit={handleSubmit}>
                <h1 className="title">Login</h1>
                {error && <h2>{error}</h2>}
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Username" ref={usernameRef} name="username"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Password" ref={passwordRef} name="password"></input>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <Link to="/signup">
                            <input className="button is-dark" value="Create Account" type="submit"/>
                        </Link>
                        <Link to="/profile">
                            <input className="button is-dark" type="submit" disabled={loading}/>
                        </Link>
                    </div>
                </div>
            </form>
        </div>);

}

