import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Employee from './components/auth/register/employee';
export default function Router() {
    return(
        <Routes>
            <Route path={'/'} element={<App />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/registerEmployee'} element={<Employee />} />
        </Routes>
    )
}