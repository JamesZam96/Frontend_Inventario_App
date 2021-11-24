import React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom';
import './registerCategory.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'

export default function RegisterCategory() {
    return (
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="newCategory">
                <h1 className="newCategoryTitle">Nueva Categoría</h1>
                <h3 className="titleCategory">Datos de la Categoría</h3>
                <div className="newCategoryForm">
                    <div className="newCategoryItem">
                        <label>Nombre</label>
                        <input id="name" type="text" placeholder="Nombre"/>
                    </div>
                    <div className="newCategoryItem">
                        <label>Descripción</label>
                        <input id="description" type="text" placeholder="Descripción"/>
                    </div>
                    <div className="newCategoryItem">
                        <button className="newCategoryButton">
                            Crear
                        </button>
                    </div>
                    <Link to="/listcategory" className="link">
                        <div className="newCategoryItem">
                            <button className="listCategoryButton">
                                Lista de Categorías
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
