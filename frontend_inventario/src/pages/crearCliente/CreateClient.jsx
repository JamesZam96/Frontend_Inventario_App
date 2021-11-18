import React from 'react'
import './createClient.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'

export default function CreateClient() {
    return (
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="newClient">
                <h1 className="newClientTitle">Nuevo Cliente</h1>
                <h3 className="titleClient">Datos del Cliente</h3>
                <form className="newClientForm">
                    <div className="newClientItem">
                        <label>Nombres</label>
                        <input type="text" placeholder="Nombres"/>
                    </div>
                    <div className="newClientItem">
                        <label>Apellidos</label>
                        <input type="text" placeholder="Apellidos"/>
                    </div>
                    <div className="newClientItem">
                        <label>Identificación</label>
                        <input type="text" placeholder="Identificación"/>
                    </div>
                    <div className="newClientItem">
                        <label>Dirección</label>
                        <input type="text" placeholder="Dirección"/>
                    </div>
                    <div className="newClientItem">
                        <label>Email</label>
                        <input type="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="newClientItem">
                        <label>Teléfono</label>
                        <input type="text" placeholder="Teléfono"/>
                    </div>
                    <button className="newClientButton">
                        Crear
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}
