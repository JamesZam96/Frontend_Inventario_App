import React from 'react'
import './topbarLR.css'
import { Link } from 'react-router-dom'

export default function topbarLR() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">InStore</span>
                </div>
                <div className="topRight">
                    <Link to="/">
                        <div className="singIn">
                            <button className="topbarButtonSingIn">Ingresar</button>
                        </div>
                    </Link>
                    <Link to="/register">
                        <div>
                            <button className="topbarButtonSingUp">Crear cuenta</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
