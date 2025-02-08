import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioForm from './components/CreatePortFolio';
import PortfolioDetails from './components/ViewYourPortfolio';
import PortfolioList from './components/Portfolio';
import Home from './components/Home';
import Signup from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute'; 

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                
                {/* Protected Routes */}
                <Route path="/portfolios" element={
                    <PrivateRoute>
                        <PortfolioList />
                    </PrivateRoute>
                } />
                <Route path="/create" element={
                    <PrivateRoute>
                        <PortfolioForm />
                    </PrivateRoute>
                } />
                <Route path="/portfolio/:id" element={
                    <PrivateRoute>
                        <PortfolioDetails />
                    </PrivateRoute>
                } />
            </Routes>
        </Router>
    );
};

export default App;
