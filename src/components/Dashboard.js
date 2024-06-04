// src/components/Dashboard.js
import React from 'react';
import {jwtDecode} from "jwt-decode";

const Dashboard = () => {
    const token = localStorage.getItem('token');
    const {name} = jwtDecode(token);
    return (
        <div>
            <h2>Welcome, {name}</h2>
        </div>
    );
};

export default Dashboard;
