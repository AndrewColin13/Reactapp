import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        color: '#333',
        position: 'relative',
        overflow: 'hidden',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
        backgroundColor: '#1877f2',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    logo: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#2c3e50',
        textDecoration: 'none',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        color: '#34495e',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s ease',
    },
    logoutButton: {
        color: '#1877f2',
        backgroundColor: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '24px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    },
    content: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 5%',
        position: 'relative',
        zIndex: '2',
    },
    title: {
        fontSize: '36px',
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: '24px',
        letterSpacing: '-1px',
    },
    description: {
        fontSize: '18px',
        color: '#34495e',
        marginBottom: '32px',
        maxWidth: '700px',
        lineHeight: '1.6',
    },
    guitarList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        maxWidth: '900px',
        width: '100%',
    },
    guitarCard: {
        background: 'white',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    guitarName: {
        color: '#2c3e50',
        fontSize: '20px',
        marginBottom: '10px',
    },
    guitarType: {
        color: '#7f8c8d',
        fontSize: '16px',
        marginBottom: '15px',
    },
    guitarDescription: {
        color: '#34495e',
        fontSize: '14px',
    },
    floatingElement: {
        position: 'absolute',
        borderRadius: '50%',
        opacity: '0.2',
        zIndex: '0',
        filter: 'blur(10px)',
    },
};

const guitars = [
    { name: 'Fender Stratocaster', type: 'Electric', description: 'A classic electric guitar known for its bright, twangy sound.' },
    { name: 'Gibson Les Paul', type: 'Electric', description: 'A solid body electric guitar with a rich, warm tone.' },
    { name: 'Martin D-28', type: 'Acoustic', description: 'A high-quality acoustic guitar with a powerful, resonant sound.' },
    { name: 'Taylor 814ce', type: 'Acoustic', description: 'A versatile acoustic guitar with a balanced tone and excellent playability.' },
];

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data and navigate to login page
        localStorage.removeItem('user');
        navigate('/login');
    };

    const createFloatingElements = () => {
        const elements = [];
        const guitarColors = ['#8e44ad', '#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
        
        for (let i = 0; i < 10; i++) {
            const size = Math.random() * 120 + 40;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const color = guitarColors[Math.floor(Math.random() * guitarColors.length)];
            
            elements.push(
                <div 
                    key={i}
                    style={{
                        ...styles.floatingElement,
                        width: `${size}px`,
                        height: `${size}px`,
                        top: `${top}%`,
                        left: `${left}%`,
                        backgroundColor: color,
                        animation: `float${i} ${6 + Math.random() * 4}s ease-in-out infinite alternate`,
                    }}
                />
            );
        }
        
        return elements;
    };

    return (
        <div style={styles.container}>
            {/* Floating background elements */}
            {createFloatingElements()}

            {/* Header with logout button */}
            <header style={styles.header}>
                <p  style={styles.logo}>Guitar World</p>
                <nav style={styles.nav}>
                    <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
                </nav>
            </header>
        
            {/* Main Content */}
            <div style={styles.content}>
                <h1 style={styles.title}>Welcome to Guitar World</h1>
                <p style={styles.description}>
                Explore the world of guitars and find the perfect instrument for you. 
                Whether you're a beginner or a seasoned player, we have something for everyone.
                </p>

                {/* Guitar List */}
                <div style={styles.guitarList}>
                    {guitars.map((guitar, index) => (
                        <div 
                            key={index} 
                            style={{
                                ...styles.guitarCard,
                                transform: 'scale(1)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.03)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
                            }}
                        >
                            <h3 style={styles.guitarName}>{guitar.name}</h3>
                            <p style={styles.guitarType}>{guitar.type}</p>
                            <p style={styles.guitarDescription}>{guitar.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dynamically create CSS animations */}
            <style>{`
                ${[0,1,2,3,4,5,6,7,8,9].map((i) => `
                    @keyframes float${i} {
                        from { 
                            transform: translateY(0px) rotate(0deg); 
                        }
                        to { 
                            transform: translateY(${Math.random() * 40 - 20}px) rotate(${Math.random() * 10 - 5}deg); 
                        }
                    }
                `).join('')}
            `}</style>
        </div>
    );
};

export default HomePage;
