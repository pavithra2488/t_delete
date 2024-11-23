import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find the user
        const user = users.find((u) => u.username === username && u.password === password);
        
      if (user) {
            onLogin(username); // Set logged-in user
            alert('Login successful!');
            setUsername('');
            setPassword('');
            navigate('/menu');
        } else {
            setError('Invalid credentials, please try again.');
        }
      
    };

   
    return (

        <div className="login-container">
            <p style={{ color: 'red'}}>Please Login to place the Order.</p>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
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
                <button type="submit">Login</button>
            </form>

            <a href='/Register'> New User Registration </a>

        </div>

    );
};


export default Login;

