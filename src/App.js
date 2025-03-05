import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Routes>
                    {/* Home page without navigation */}
                    <Route path="/home" element={<HomePage />} />
                    
                    {/* Other pages with navigation */}
                    <Route element={<WithNavigation />}>
                        <Route path="/landing" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

// Wrapper component to add navigation to specific routes
const WithNavigation = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    );
};

export default App;