import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const styles = {
        pageContainer: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f2f5',
            padding: '20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        },
        formContainer: {
            width: '100%',
            maxWidth: '400px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '24px',
            boxSizing: 'border-box',
        },
        title: {
            fontSize: '24px',
            fontWeight: '600',
            color: '#1c1e21',
            textAlign: 'center',
            marginBottom: '20px',
        },
        inputContainer: {
            marginBottom: '16px',
        },
        input: {
            width: '100%',
            padding: '12px',
            border: '1px solid #dddfe2',
            borderRadius: '6px',
            fontSize: '16px',
            boxSizing: 'border-box',
        },
        passwordContainer: {
            position: 'relative',
        },
        showPasswordBtn: {
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: '#8a8d91',
            cursor: 'pointer',
            fontSize: '14px',
        },
        submitButton: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#1877f2',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '16px',
        },
        loginLink: {
            marginTop: '20px',
            textAlign: 'center',
            color: '#1c1e21',
        },
        loginLinkButton: {
            color: '#1877f2',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            marginLeft: '4px',
        },
        passwordIcon: {
            fontSize: '20px',
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempted', { email, password });
        
        // Simple login validation
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log('Stored users:', users);
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            console.log('User found:', user);
            navigate('/home'); // Navigate to HomePage
        } else {
            alert('Invalid email or user not found');
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Log In</h2>
                <form onSubmit={handleLogin}>
                    <div style={styles.inputContainer}>
                        <input 
                            type="email" 
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required 
                        />
                    </div>
                    <div style={{...styles.inputContainer, ...styles.passwordContainer}}>
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required 
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={styles.showPasswordBtn}
                        >
                            {showPassword ? 
                                <VisibilityOffOutlinedIcon style={styles.passwordIcon} /> : 
                                <VisibilityOutlinedIcon style={styles.passwordIcon} />
                            }
                        </button>
                    </div>
                    <button 
                        type="submit" 
                        style={styles.submitButton}
                    >
                        Log In
                    </button>
                </form>
                <div style={styles.loginLink}>
                    Don't have an account?
                    <button 
                        onClick={() => navigate('/signup')} 
                        style={styles.loginLinkButton}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
