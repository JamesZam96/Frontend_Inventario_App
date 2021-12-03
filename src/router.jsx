import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import App from './App'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import CreateUser from './pages/createUser/CreateUser';
import CreateClient from './pages/createClient/CreateClient';
import CreateProvider from './pages/createProvider/CreateProvider';
import RegisterProduct from './pages/registerProduct/RegisterProduct';
import Home from './pages/home/Home';
import CheckInventory from './pages/checkInventory/CheckInventory';
import ListEmployees from './pages/listEmployees/ListEmployees';
import ListClients from './pages/listClients/ListClients';
import ListProviders from './pages/listProviders/ListProviders';
import RegisterCategory from './pages/registerCategory/RegisterCategory';
import ListCategory from './pages/listCategory/ListCategory';
import NotFound from './pages/404notFound/notFound'


export default function Router() {
    return(
        <Routes>
            <Route path={'/home'} element={<Home/>} />
            <Route path={'/'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/registerEmployee'} element={<CreateUser />} />
            <Route path={'/createclient'} element={<CreateClient/>}/>
            <Route path={'/createprovider'} element={<CreateProvider/>}/>
            <Route path={'/registerproduct'} element={<RegisterProduct/>}/>
            <Route path={'/checkinventory'} element={<CheckInventory/>}/>
            <Route path={'/listemployee'} element={<ListEmployees/>}/>
            <Route path={'/listclient'} element={<ListClients/>}/>
            <Route path={'/listprovider'} element={<ListProviders/>}/>
            <Route path={'/registercategory'} element={<RegisterCategory/>}/>
            <Route path={'/listcategory'} element={<ListCategory/>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    )
}