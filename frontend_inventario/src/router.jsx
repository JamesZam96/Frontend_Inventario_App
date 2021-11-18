import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import App from './App'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Employee from './components/auth/register/employee';
// import NewUser from z'./pages/newUser/NewUser';
import CreateUser from './pages/createUser/CreateUser';
import CreateClient from './pages/crearCliente/CreateClient';
import CreateProvider from './pages/createProvider/CreateProvider';
import RegisterProduct from './pages/registerProduct/RegisterProduct';
import Home from './pages/home/Home';


export default function Router() {
    return(
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/registerEmployee'} element={<Employee />} />
            <Route path={'/createuser'} element={<CreateUser/>}/>
            <Route path={'/createclient'} element={<CreateClient/>}/>
            <Route path={'/createprovider'} element={<CreateProvider/>}/>
            <Route path={'/registerproduct'} element={<RegisterProduct/>}/>
        </Routes>
    )
}