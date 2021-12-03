import React from 'react'
import './home.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'
import HomeCards from '../../components/homecards/HomeCards'
import { Navigate } from 'react-router-dom'
import authHelper from '../../helpers/auth.helper'

export default function Home() {
    return (
        authHelper.getToken()?
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="home">
                <HomeCards/>
            </div>
        </div>
    </div>:
        <Navigate to={'/'}/>
    )
}
