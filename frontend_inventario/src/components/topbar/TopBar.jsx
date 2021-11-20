import React from "react"
import "./TopBar.css"
import {NotificationsNone, Language, ExitToApp} from '@material-ui/icons';

export default function TopBar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">InStore</span>
                </div>
                <div className="topRight">
                    <div>
                        <button className="topbarButtonSingIn">Ingresar</button>
                    </div>
                    <div>
                        <button className="topbarButtonSingUp">Crear cuenta</button>
                    </div>
                    {/* <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <ExitToApp/>
                    </div>
                    <img src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?cs=srgb&dl=pexels-tiger-lily-4483610.jpg&fm=jpg" alt="" className="topAvatar"/> */}
                </div>
            </div>
        </div>
    )
}