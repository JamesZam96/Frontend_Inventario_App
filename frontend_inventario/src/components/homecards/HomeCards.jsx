import React from 'react'
import './homeCards.css'
import {PersonAdd,
        PeopleAlt,
        Business,
        LocalOffer,
        LibraryAdd,
        LibraryAddCheck,
        Search,
        Description,
        Payment} from '@material-ui/icons'
import {Link} from 'react-router-dom'

export default function HomeCards() {
    return (
        <div className="cards">
            <div className="cardsItemTitle">
                <span>Bienvenido</span>
            </div>
            <Link to="/registerEmployee" className="linkCard">
                <div className="cardsItem">
                    <span className="cardTitle">Crear Usuario</span>
                    <div className="cardIconContainer">
                        <PersonAdd/>
                    </div>
                </div>
            </Link>
            <Link to="/createclient" className="linkCard">
                <div className="cardsItem">
                    <span className="cardTitle">Crear Cliente</span>
                    <div className="cardIconContainer">
                        <PeopleAlt/>
                    </div>
                </div>
            </Link>
            <Link to="/createprovider" className="linkCard">
                <div className="cardsItem">
                    <span className="cardTitle">Crear Proveedor</span>
                    <div className="cardIconContainer">
                        <Business/>
                    </div>
                </div>
            </Link>
            <Link to="/registerproduct" className="linkCard">
                <div className="cardsItem">
                    <span className="cardTitle">Registrar Producto</span>
                    <div className="cardIconContainer">
                        <LocalOffer/>
                    </div>
                </div>
            </Link>
            <div className="cardsItem">
                <span className="cardTitle">Registrar Compra</span>
                <div className="cardIconContainer">
                    <LibraryAdd/>
                </div>
            </div>
            <div className="cardsItem">
                <span className="cardTitle">Registrar Venta</span>
                <div className="cardIconContainer">
                    <LibraryAddCheck/>
                </div>
            </div>
            <Link to="/checkinventory" className="linkCard">
                <div className="cardsItem">
                    <span className="cardTitle">Consultar Inventario</span>
                    <div className="cardIconContainer">
                        <Search/>
                    </div>
                </div>
            </Link>
            <div className="cardsItem">
                <span className="cardTitle">Informe de Inventario</span>
                <div className="cardIconContainer">
                    <Description/>
                </div>
            </div>
            <div className="cardsItem">
                <span className="cardTitle">Facturación</span>
                <div className="cardIconContainer">
                    <Payment/>
                </div>
            </div>
        </div>
    )
}
