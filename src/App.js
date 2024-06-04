// src/App.js
import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/" element={<Navigate to="/login"/>}/>
            </Routes>
        </Router>
    );
};

export default App;
