import React from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Typography, AppBar, Toolbar, Button, Box } from '@mui/material';

const Navigation = ({ setPage }) => {
    const styles = {
        appBar: {
            backgroundColor: '#1877f2',
            boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px',
        },
        logoButton: {
            color: 'white',
            textTransform: 'none',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
        },
        buttonContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        },
        loginButton: {
            color: 'white',
            backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.7)',
            textTransform: 'none',
            fontWeight: 600,
            padding: '8px 20px',
            borderRadius: '24px',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: '1px solid white',
            }
        },
        signupButton: {
            color: '#1877f2',
            backgroundColor: 'white',
            textTransform: 'none',
            fontWeight: 600,
            padding: '8px 20px',
            borderRadius: '24px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: '#f0f0f0',
                boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
            }
        }
    };

    return (
        <AppBar position="static" style={styles.appBar}>
            <Toolbar style={styles.toolbar}>
                <Link to="/landing" style={styles.logoButton}>
                    <HomeOutlinedIcon />
                    <Typography variant="h6">MyApp</Typography>
                </Link>
                <Box style={styles.buttonContainer}>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button style={styles.loginButton}>
                            Login
                        </Button>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Button style={styles.signupButton}>
                            Sign Up
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;