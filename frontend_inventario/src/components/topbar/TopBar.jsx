import React from "react"
import "./TopBar.css"
import {ExitToApp} from '@material-ui/icons';
import authHelper from '../../helpers/auth.helper'

export default function TopBar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">InStore</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <ExitToApp/>
                    </div>
                </div>
            </div>
        </div>
    )
}