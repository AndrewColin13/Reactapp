import React from 'react';

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        color: '#333',
        position: 'relative',
        overflow: 'hidden',
    },
    floatingElement: {
        position: 'absolute',
        borderRadius: '50%',
        opacity: '0.2',
        zIndex: '0',
        filter: 'blur(10px)',
    },
    content: {
        width: '100%',
        maxWidth: '400px',
        padding: '0 24px',
        position: 'relative',
        zIndex: '1',
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
        lineHeight: '1.6',
    },
    button: {
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        display: 'inline-block',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    subtext: {
        fontSize: '14px',
        color: '#7f8c8d',
        marginTop: '16px',
    }
};

const GuitarsLandingPage = () => {
    const createFloatingElements = () => {
        const elements = [];
        const guitarColors = ['#8e44ad', '#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
        
        for (let i = 0; i < 8; i++) {
            const size = Math.random() * 120 + 40; // Random size between 40-160px
            const top = Math.random() * 100; // Random top position (0-100%)
            const left = Math.random() * 100; // Random left position (0-100%)
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
            
            <div style={styles.content}>
                <h1 style={styles.title}>Strum Your Story</h1>
                <p style={styles.description}>
                    Discover the perfect guitar that speaks to your musical soul. 
                    From classic acoustics to electric powerhouses, find your 
                    sound with our curated collection.
                </p>
                <p style={styles.subtext}>
                    Join thousands of musicians who found their perfect instrument
                </p>
            </div>

            {/* Dynamically create CSS animations */}
            <style>{`
                ${[0,1,2,3,4,5,6,7].map((i) => `
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

export default GuitarsLandingPage;