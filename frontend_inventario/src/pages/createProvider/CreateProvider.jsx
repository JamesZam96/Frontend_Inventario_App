import React from 'react'
import './createProvider.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'

export default function CreateProvider() {
    return (
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="newProvider">
                <h1 className="newProviderTitle">Nuevo Proveedor</h1>
                <h3 className="titleProvider">Datos del Proveedor</h3>
                <form className="newProviderForm">
                    <div className="newProviderItem">
                        <label>Nombres</label>
                        <input type="text" placeholder="Nombres"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Apellidos</label>
                        <input type="text" placeholder="Apellidos"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Identificación</label>
                        <input type="text" placeholder="Identificación"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Dirección</label>
                        <input type="text" placeholder="Dirección"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Email</label>
                        <input type="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Teléfono</label>
                        <input type="text" placeholder="Teléfono"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Web</label>
                        <input type="text" placeholder="Web"/>
                    </div>
                    <button className="newProviderButton">
                        Crear
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}
