// src/components/Dashboard.js
import React, {useEffect, useState} from 'react';
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            const {name} = jwtDecode(token);
            setUsername(name)
        }
    }, [token, navigate]);
    return (
        <div>
            <h2>Welcome, {username}</h2>
        </div>
    );
};

export default Dashboard;
