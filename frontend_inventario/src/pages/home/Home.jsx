import React from 'react'
import './home.css'
import SideBar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import HomeCards from '../../components/homecards/HomeCards'

export default function Home() {
    return (
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="home">
                <HomeCards/>
            </div>
        </div>
    </div>
    )
}
