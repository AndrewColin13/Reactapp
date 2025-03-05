import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Add signup logic here
        console.log('Signup attempted', { name, email, password });

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(formData));

        // Navigate to login page
        navigate('/login');
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Sign Up</h2>
                <form onSubmit={handleFormSubmit}>
                    <div style={styles.inputContainer}>
                        <input 
                            id="name"
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <input 
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={{...styles.inputContainer, ...styles.passwordContainer}}>
                        <input 
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
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
                    <div style={{...styles.inputContainer, ...styles.passwordContainer}}>
                        <input 
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            style={styles.showPasswordBtn}
                        >
                            {showConfirmPassword ? 
                                <VisibilityOffOutlinedIcon style={styles.passwordIcon} /> : 
                                <VisibilityOutlinedIcon style={styles.passwordIcon} />
                            }
                        </button>
                    </div>
                    <button 
                        type="submit" 
                        style={styles.submitButton}
                    >
                        Create Account
                    </button>
                </form>
                <div style={styles.loginLink}>
                    Already have an account?
                    <button 
                        onClick={() => navigate('/login')} 
                        style={styles.loginLinkButton}
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;