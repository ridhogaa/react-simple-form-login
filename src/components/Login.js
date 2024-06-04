// src/components/Login.js
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {API_URL} from '../helper/ApiHelper';
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            navigate('/dashboard');
        }
    }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await axios.post(`${API_URL}/v1/auth/login`, {
                username, password
            });
            localStorage.setItem("token", response.data.data.token);
            navigate('/dashboard');
        } catch (error) {
            if (error.response.data.status === false) {
                alert(error.response.data.message);
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <div
            className="bg-body-secondary d-flex flex-column justify-content-center align-items-center vh-100 vw-100 gap-3">
            <h2>Login</h2>
            <form className="d-flex flex-column justify-content-center align-items-center gap-3"
                  onSubmit={handleSubmit}>
                <div>
                    <input
                        className="rounded-3 p-2 border-0"
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <div className="input-group">
                        <input
                            className="rounded-3 p-2 border-0 "
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    className="rounded-3 w-100 bg-dark text-white p-2"
                    type="submit">{loading ? (
                    <div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>) : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
