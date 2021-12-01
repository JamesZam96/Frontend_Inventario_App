import React from "react";
import "./SideBar.css"
import {Home,
    PersonAdd,
    PeopleAlt,
    Business,
    LocalOffer,
    LibraryAdd,
    LibraryAddCheck,
    Search,
    Description,
    Payment
} from '@material-ui/icons'
import {Link} from 'react-router-dom'

export default function SideBar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <Home className="sidebarIcon"/>
                                Inicio
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Crear</h3>
                    <ul className="sidebarList">
                        <Link to="/registerEmployee" className="link">
                            <li className="sidebarListItem">
                                <PersonAdd className="sidebarIcon"/>
                                Nuevo empleado
                            </li>
                        </Link>
                        <Link to="/createclient" className="link">
                            <li className="sidebarListItem">
                                <PeopleAlt className="sidebarIcon"/>
                                Nuevo Cliente
                            </li>
                        </Link>
                        <Link to="/createprovider" className="link">
                            <li className="sidebarListItem">
                                <Business className="sidebarIcon"/>
                                Nuevo Proveedor
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Registrar</h3>
                    <ul className="sidebarList">
                        <Link to="/registerproduct" className="link">
                            <li className="sidebarListItem">
                                <LocalOffer className="sidebarIcon"/>
                                Registrar Producto
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <LibraryAdd className="sidebarIcon"/>
                            Registrar Compra
                        </li>
                        <li className="sidebarListItem">
                            <LibraryAddCheck className="sidebarIcon"/>
                            Registrar Venta
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Consultar</h3>
                    <ul className="sidebarList">
                        <Link to="/checkinventory" className="link">
                            <li className="sidebarListItem">
                                <Search className="sidebarIcon"/>
                                Consultar Inventario
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Description className="sidebarIcon"/>
                            Informe de Inventario
                        </li>
                        <li className="sidebarListItem">
                            <Payment className="sidebarIcon"/>
                            Facturación
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}