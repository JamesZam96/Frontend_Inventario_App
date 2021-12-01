import React from "react"
import "./TopBar.css"
import {ExitToApp} from '@material-ui/icons';
import authHelper from '../../helpers/auth.helper'
import { useNavigate } from 'react-router-dom';

export default function TopBar(){
    let navigate = useNavigate()
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">InStore</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <ExitToApp onClick={() => {authHelper.deleteToken(); navigate('/')}} />
                    </div>
                </div>
            </div>
        </div>
    )
}