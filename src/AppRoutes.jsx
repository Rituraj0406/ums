import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './modules/home/HomePage';
import Dashboard from './modules/Dashboard';
import UserDetails from './modules/Users/UserDetails';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}>
                <Route path='/' element={<Dashboard/>}/>
                <Route path="/user-details/:userId" element={<UserDetails />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes
