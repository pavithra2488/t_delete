import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if username already exists
    const userExists = users.some((user) => user.username === username);
        if (userExists) {
            setError('Username already exists. Please choose a different one.');
            return;
        }

        // Store new user
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered successfully!');
        navigate('/Login');
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleRegister} className="login-form">
                <h2>Register</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <a href='/Login'>Login Page </a>
        </div>
    );
};

export default Register;
